import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbUri = process.env.DATABASE_URI;
        const conn = await mongoose.connect(dbUri);
        console.log(`DB CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.error("ERROR WHILE DB CONNECTION:", error.message);
        process.exit(1);
    }
};

export default connectDB;