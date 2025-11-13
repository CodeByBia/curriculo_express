import { Router } from "express";
import { createFormacao, getAllFormacoes } from "../controllers/formacaoController.js";

const router = Router();

router.post("/", createFormacao);
router.get("/", getAllFormacoes);

export default router;
