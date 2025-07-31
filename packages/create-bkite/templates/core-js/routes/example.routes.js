import express from "express";
import { getExample } from "../controllers/example.controllers.js";

const router = express.Router();

router.get("/", getExample);

export default router;