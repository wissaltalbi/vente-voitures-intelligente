# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  

from database.mongo import db
from bson import ObjectId
from bson.json_util import dumps
import json
from auth.routes import router as auth_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

# Convertir les objets BSON en JSON lisible
def bson_to_json(data):
    return json.loads(dumps(data))

@app.get("/")
async def read_root():
    try:
        user = await db["users"].find_one()
        if user:
            return {"users": bson_to_json(user)}
        return {"message": "Aucun utilisateur trouvé"}
    except Exception as e:
        return {"error": str(e)}
