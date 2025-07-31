import express from "express";
const app = express();
import cors from "cors";
import exampleRouter from "./routes/example.routes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware.js";

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.use("/example", exampleRouter);
app.use(globalErrorHandler);

export { app };