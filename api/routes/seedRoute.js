import { Router } from "express";
import { runSeed } from "../controllers/seedController.js";

const router = Router();

// POST /api/seed  -- execute seed protected by header x-seed-token
router.post("/", runSeed);

export default router;
