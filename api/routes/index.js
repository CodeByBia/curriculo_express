import { Router } from "express";
import pessoaRoute from "./pessoaRoute.js";
import formacaoRoute from "./formacaoRoute.js";
import experienciaRoute from "./experienciaRoute.js";

const router = Router();

router.use("/pessoa", pessoaRoute);
router.use("/formacao", formacaoRoute);
router.use("/experiencia", experienciaRoute);

export default router;
