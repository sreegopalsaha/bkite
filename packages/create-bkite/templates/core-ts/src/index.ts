import dotenv from "dotenv";
import { app } from "./app";

// Configure environment variables
dotenv.config();

const PORT: number = parseInt(process.env.PORT || "8000", 10);

const startServer = (): void => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

startServer();
