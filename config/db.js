import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGO_URI = "mongodb+srv://Dieu:Donne@cluster0.u3d1qt9.mongodb.net/Hobby";

    await mongoose.connect(MONGO_URI);
    console.log("Database Connected");
}
