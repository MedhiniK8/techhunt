import pandas as pd
from io import BytesIO
from fastapi import APIRouter, HTTPException, status
from fastapi.responses import StreamingResponse
from app.db.database import registration_collection
from app.schemas.registration_schema import RegistrationCreate
from datetime import datetime, timezone
import asyncio

router = APIRouter()
registration_lock = asyncio.Lock()

@router.get("/status")
async def get_registration_status():
    count = await registration_collection.count_documents({})
    return {"is_open": count < 107}

@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_team(registration: RegistrationCreate):
    async with registration_lock:
        # Pre-check
        count = await registration_collection.count_documents({})
        if count >= 107:
            raise HTTPException(status_code=400, detail="Sorry you are late. Registrations Closed!")

        # Convert incoming data to a dictionary
        reg_dict = registration.model_dump()
        
        # Auto-generate timestamp
        reg_dict["created_at"] = datetime.now(timezone.utc)
        
        # Store in MongoDB
        result = await registration_collection.insert_one(reg_dict)
        
        if result.inserted_id:
            # Post-check validation to enforce absolute ceiling across multiple workers
            post_count = await registration_collection.count_documents({})
            if post_count > 107:
                # Rollback specific document
                await registration_collection.delete_one({"_id": result.inserted_id})
                raise HTTPException(status_code=400, detail="Sorry you are late. Registrations Closed!")
                
            return {"message": "Registration successful!"}
        
        raise HTTPException(status_code=500, detail="Failed to complete registration")

@router.get("/registrations")
async def get_registrations():
    # Return all registrations (primarily for testing)
    registrations = []
    cursor = registration_collection.find({})
    async for document in cursor:
        # Convert ObjectId to string
        document["id"] = str(document["_id"])
        del document["_id"]
        registrations.append(document)
        
    return registrations

@router.get("/export")
async def export_registrations():
    # Export to Excel using pandas + openpyxl
    registrations = []
    cursor = registration_collection.find({})
    
    async for document in cursor:
        document["id"] = str(document["_id"])
        
        # Strip timezone info for excel export
        created_at = document.get("created_at")
        if created_at and hasattr(created_at, "replace"):
            created_at = created_at.replace(tzinfo=None)
            
        # Flatten dictionary for dataframe
        flat_doc = {
            "DB ID": document["id"],
            "Team Name": document.get("team_name"),
            "Captain Name": document.get("captain_name"),
            "Captain USN": document.get("captain_usn"),
            "Captain Email": document.get("captain_email"),
            "Captain Phone": document.get("captain_phone"),
            "Registered At (UTC)": created_at,
        }
        
        # Flatten team members
        members = document.get("members", [])
        if len(members) >= 1:
            flat_doc["Member 1 Name"] = members[0].get("name")
            flat_doc["Member 1 USN"] = members[0].get("usn")
            flat_doc["Member 1 Email"] = members[0].get("email")
            flat_doc["Member 1 Phone"] = members[0].get("phone")
        if len(members) >= 2:
            flat_doc["Member 2 Name"] = members[1].get("name")
            flat_doc["Member 2 USN"] = members[1].get("usn")
            flat_doc["Member 2 Email"] = members[1].get("email")
            flat_doc["Member 2 Phone"] = members[1].get("phone")
            
        registrations.append(flat_doc)
        
    if not registrations:
        raise HTTPException(status_code=404, detail="No registrations found to export")
        
    # Convert list of dictionaries to pandas DataFrame
    df = pd.DataFrame(registrations)
    
    # Save the dataframe into a memory buffer
    output = BytesIO()
    with pd.ExcelWriter(output, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Registrations')
        
        # Optional: Auto-adjust column widths
        worksheet = writer.sheets['Registrations']
        for column_cells in worksheet.columns:
            length = max(len(str(cell.value)) for cell in column_cells)
            worksheet.column_dimensions[column_cells[0].column_letter].width = length + 2
    
    # Move buffer cursor to the beginning
    output.seek(0)
    
    headers = {
        'Content-Disposition': 'attachment; filename="techhunt_registrations.xlsx"'
    }
    
    # Return as downloadable Excel file
    return StreamingResponse(
        output, 
        headers=headers, 
        media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
