import { Router } from "express";
import {
  createExperiencia,
  updateExperiencia,
  deleteExperiencia,
  getExperiencia,
  getAllExperiencias,
} from "../controllers/experienciaController.js";

const router = Router();

router.post("/", createExperiencia);
router.patch("/:id", updateExperiencia);
router.delete("/:id", deleteExperiencia);
router.get("/", getAllExperiencias);
router.get("/:id", getExperiencia);

export default router;
