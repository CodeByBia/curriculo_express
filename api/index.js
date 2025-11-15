// Handler serverless para Vercel
import serverless from "serverless-http";
import app from "../src/app.js";

// Exportar handler padrão para Vercel (export default)
// Vercel espera o handler como default export quando usa módulos ESM.
// Usar named export (`export const handler`) pode causar `FUNCTION_INVOCATION_FAILED`.
export default serverless(app);

