from fastapi import APIRouter

router = APIRouter(prefix="/api/test", tags=["Test"])


@router.get("/")
def test():
    return {
        "message": "AI service is working"
    }