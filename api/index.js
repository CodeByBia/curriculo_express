import express from "express";
import "dotenv/config";
import cors from "cors";
import models from "./models/index.js";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // resposta simples na raiz — só pra confirmar que o servidor tá vivo
  res.send("API Currículo Express — tô no ar");
});

app.use("/api", routes);

async function seed() {
  const { Pessoa, Formacao, Experiencia } = models;

  const p1 = await Pessoa.create({
    nome: "João",
    email: "joao@test.com",
    phone: "1111-1111",
  });

  await Formacao.create({
    instituicao: "UFPE",
    curso: "ADS",
    nivel: "Superior",
    pessoaId: p1.id,
  });

  await Experiencia.create({
    empresa: "Tech Ltda",
    cargo: "Estagiário",
    pessoaId: p1.id,
  });

  const p2 = await Pessoa.create({
    nome: "Ana",
    email: "ana@test.com",
    phone: "2222-2222",
  });

  await Formacao.create({
    instituicao: "UFRPE",
    curso: "SI",
    nivel: "Superior",
    pessoaId: p2.id,
  });

  await Experiencia.create({
    empresa: "Dev Co",
    cargo: "Júnior",
    pessoaId: p2.id,
  });

  // Seed feito: dados de exemplo inseridos (útil em dev)
  console.log("Seed rodado");
}

import { sequelize } from "./db/sequelize.js";

/*
  start(): autentica e sincroniza o banco, roda seed em dev e inicia o servidor.
*/
async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Banco Ok e modelos sincronizados.");

    // Se estiver em desenvolvimento, insere alguns dados de exemplo.
    // Controle com a variável SEED (coloque SEED=true para forçar).
    if (process.env.SEED === "true" || process.env.NODE_ENV !== "production") {
      try {
        await seed();
      } catch (e) {
        // não quebre a inicialização por causa do seed — só logue
        console.warn("Seed deu erro:", e.message);
      }
    }

    app.listen(port, () => console.log(` servidor na porta ${port}`));
  } catch (e) {
    console.error("Erro ao iniciar a app:", e.message);
    process.exit(1);
  }
}

start();

