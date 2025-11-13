import { Router } from "express";
import { runSeed } from "../controllers/seedController.js";

const router = Router();

router.post("/", runSeed);

export default router;
