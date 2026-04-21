from datetime import datetime
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from app.schemas.registration_schema import MemberSchema

class RegistrationDBModel(BaseModel):
    """
    Representation of the Registration document as stored in MongoDB.
    """
    id: Optional[str] = Field(default=None, alias="_id")
    team_name: str
    captain_name: str
    captain_usn: str
    captain_email: EmailStr
    captain_phone: str
    members: List[MemberSchema]
    created_at: datetime
    
    class Config:
        populate_by_name = True
