import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// Aplicação Express (sem chamar server.listen aqui)
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Currículo Express — versão serverless");
});

// Evita 404 no navegador para /favicon.ico
app.get("/favicon.ico", (_req, res) => res.status(204).end());

// Montar rotas da API em /api
app.use("/api", routes);

export default app;
