import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const dbUri = process.env.DATABASE_URI;

        
        if (!dbUri) {
            throw new Error("DATABASE_URI must be defined in your environment variables.");
        }

        const conn = await mongoose.connect(dbUri);
        console.log(`DB CONNECTED: ${conn.connection.host}`);

    } catch (error) {
    
        if (error instanceof Error) {
            console.error(`ERROR CONNECTING TO DB: ${error.message}`);
        } else {
            console.error("An unknown error occurred during DB connection:", error);
        }
        process.exit(1);
    }
};

export default connectDB;