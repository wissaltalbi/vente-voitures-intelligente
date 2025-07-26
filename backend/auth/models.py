# auth/models.py
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    nom: str
    email: EmailStr
    mot_de_passe: str
    rôle: Optional[str] = "client"

class UserLogin(BaseModel):
    email: EmailStr
    mot_de_passe: str
