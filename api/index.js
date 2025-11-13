// Handler serverless para Vercel
import serverless from "serverless-http";
import app from "../src/app.js";

// Exportar handler único para Vercel (só esse arquivo em /api conta como função)
export const handler = serverless(app);

