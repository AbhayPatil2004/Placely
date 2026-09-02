from fastapi import FastAPI
from app.routes.test import router

app = FastAPI()


app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Placely AI/ML Service Running"
    }