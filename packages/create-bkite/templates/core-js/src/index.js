import dotenv from "dotenv";
import { app } from './app.js';

// Configure environment variables
dotenv.config();

const PORT = process.env.PORT || 8000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
  });
};

startServer();