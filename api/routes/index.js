import { Router } from "express";
import pessoaRoute from "./pessoaRoute.js";
import formacaoRoute from "./formacaoRoute.js";
import experienciaRoute from "./experienciaRoute.js";
import seedRoute from "./seedRoute.js";

const router = Router();

router.use("/pessoa", pessoaRoute);
router.use("/formacao", formacaoRoute);
router.use("/experiencia", experienciaRoute);
router.use("/seed", seedRoute);

export default router;
