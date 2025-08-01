import dotenv from "dotenv";
dotenv.config();
import {app} from "./app.js";
import connectDB from "./configs/db.config.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("ERROR WHILE DB CONNECTION:", error.message);
  }
};

startServer();