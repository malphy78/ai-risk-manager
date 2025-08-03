from fastapi import FastAPI
from api.risk_routes import router as risk_router

app = FastAPI()
app.include_router(risk_router, prefix="/api")
