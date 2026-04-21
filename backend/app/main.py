from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.registration import router as registration_router

app = FastAPI(title="Tech Hunt API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Include routes
app.include_router(registration_router)

@app.get("/")
def read_root():
    return {"message": "Tech Hunt Registration API is running smoothly!"}
