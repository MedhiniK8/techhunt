import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get MongoDB connection string
MONGODB_URI = os.getenv("MONGODB_URI")

# Initialize MongoDB Async Client
client = AsyncIOMotorClient(MONGODB_URI)

# Get database and collection
database = client.techhunt
registration_collection = database.registrations
