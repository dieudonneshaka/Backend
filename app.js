import mongoose from 'mongoose';
const uri = "mongodb://localhost:27017/activitiesDB"; // local DB

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to local MongoDB!"))
  .catch(err => console.error("❌ Connection error:", err));
