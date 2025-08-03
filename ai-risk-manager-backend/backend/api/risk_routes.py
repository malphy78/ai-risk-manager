from fastapi import APIRouter, UploadFile, File
from services.scoring import calculate_risk_score

router = APIRouter()

@router.post("/risk/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    score = calculate_risk_score(contents.decode())
    return {"risk_score": score}
