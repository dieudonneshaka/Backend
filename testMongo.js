import mongoose from 'mongoose';

// Replace with your exact connection string
const uri = "mongodb+srv://test:test@cluster0.7a6ktmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  try {
    console.log("Trying to connect to MongoDB...");
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected successfully!");
    await mongoose.disconnect();
    console.log("Disconnected successfully.");
  } catch (err) {
    console.error("❌ MongoDB connection error:");
    console.error(err); 
  }
}

testConnection();
