# auth/routes.py
from fastapi import APIRouter, HTTPException, status
from auth.models import UserCreate, UserLogin
from auth.hashing import hash_password, verify_password
from auth.auth_utils import create_access_token
from database.mongo import db
from datetime import datetime

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

@router.post("/register")
async def register(user: UserCreate):
    user_exist = await db["users"].find_one({"email": user.email})
    if user_exist:
        raise HTTPException(status_code=400, detail="Email déjà utilisé")

    hashed_pwd = hash_password(user.mot_de_passe)
    new_user = {
        "nom": user.nom,
        "email": user.email,
        "mot_de_passe": hashed_pwd,
        "rôle": user.rôle,
        "date_inscription": datetime.utcnow()
    }

    await db["users"].insert_one(new_user)
    return {"message": "Utilisateur créé avec succès"}
@router.post("/login")
async def login(user: UserLogin):
    user_db = await db["users"].find_one({"email": user.email})
    if not user_db or not verify_password(user.mot_de_passe, user_db["mot_de_passe"]):
        raise HTTPException(status_code=401, detail="Identifiants invalides")

    token = create_access_token(data={"sub": user_db["email"], "role": user_db["rôle"]})
    return {"access_token": token, "token_type": "bearer"}
