from pydantic import BaseModel, EmailStr, Field
from typing import List

class MemberSchema(BaseModel):
    name: str = Field(..., description="Name of the team member")
    usn: str = Field(..., description="USN of the team member")
    email: EmailStr = Field(..., description="Email of the team member")
    phone: str = Field(..., description="Phone number of the team member")

class RegistrationCreate(BaseModel):
    team_name: str = Field(..., description="Name of the team")
    captain_name: str = Field(..., description="Name of the captain")
    captain_usn: str = Field(..., description="USN of the captain")
    captain_email: EmailStr = Field(..., description="Email of the captain")
    captain_phone: str = Field(..., description="Phone number of the captain")
    members: List[MemberSchema] = Field(
        ..., 
        min_length=2, 
        max_length=2, 
        description="Exactly 2 other team members are required"
    )
