// Handler serverless para Vercel
import serverless from "serverless-http";
import app from "./app.js";

// Exportar handler que Vercel irá usar como função serverless
export const handler = serverless(app);

