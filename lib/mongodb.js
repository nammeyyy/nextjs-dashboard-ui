import mongoose, { mongo } from "mongoose";

export const connectMongoDB = async () => {
    try {

        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        console.log("Connected to MongoDB")

    } catch(error) {
        console.log("Error connecting to MongoDB: ", error)
    }
}