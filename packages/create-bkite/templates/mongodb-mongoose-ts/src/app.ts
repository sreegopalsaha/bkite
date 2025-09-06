import express, { Express, Request, Response } from "express";
import cors from "cors";
import exampleRouter from "./routes/example.routes"; 
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware"; 

const app: Express = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from the server!");
});

app.use("/api/v1/example", exampleRouter); 
app.use(globalErrorHandler);

export { app };