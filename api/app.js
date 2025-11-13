import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// Este arquivo apenas monta o Express app (sem chamar listen).
// Isso permite usar o mesmo app tanto em serverless (Vercel) quanto localmente.
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Currículo Express — versão serverless");
});

// Mantemos as rotas como estavam (prefixadas com /api no projeto original).
app.use("/api", routes);

export default app;
