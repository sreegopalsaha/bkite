import express, { Router } from "express";
import { getExample } from "../controllers/example.controllers"; 

const router: Router = express.Router();

router.get("/", getExample);

export default router;
