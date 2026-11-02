import "dotenv/config";
import { app } from "./app.js";

const PORT: number = parseInt(process.env.PORT || "3000", 10);

const startServer = (): void => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

startServer();
