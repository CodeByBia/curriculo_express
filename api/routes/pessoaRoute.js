import { Router } from "express";
import { createPessoa, getAllPessoas } from "../controllers/pessoaController.js";

const router = Router();

router.post("/", createPessoa);
router.get("/", getAllPessoas);

export default router;
