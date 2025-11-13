import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// App centralizado (sem listen) — usado tanto localmente quanto pelo handler serverless
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Currículo Express — versão serverless");
});

app.use("/api", routes);

export default app;
