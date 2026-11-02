import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./configs/db.config.js";

const PORT: number = parseInt(process.env.PORT || "3000", 10);

const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("ERROR WHILE CONNECTING TO DB:", error);
    process.exit(1);
  }
};

startServer();
