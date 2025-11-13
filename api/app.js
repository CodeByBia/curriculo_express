import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// Aplicação Express (sem chamar server.listen aqui)
// Usada pelo handler serverless e pelo servidor local
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Currículo Express — versão serverless");
});

// Montar rotas da API em /api
app.use("/api", routes);

export default app;
