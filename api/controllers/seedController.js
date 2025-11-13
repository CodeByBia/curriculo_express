import { sequelize } from "../db/sequelize.js";
import models from "../models/index.js";

const { Pessoa, Formacao, Experiencia } = models;

// Seed: cria tabelas (se necessário) e insere dados de exemplo
export async function seedDatabase() {
  // autentica e sincroniza (cria/ajusta tabelas)
  await sequelize.authenticate();
  // em dev/test podemos alterar a tabela para acompanhar o modelo (simples e prático)
  await sequelize.sync({ alter: true });

  const count = await Pessoa.count();
  if (count > 0) {
    return { seeded: false, reason: "Already has records" };
  }

  const p1 = await Pessoa.create({ nome: "João", email: "joao@test.com", phone: "1111-1111" });

  await Formacao.create({ instituicao: "UFPE", curso: "ADS", nivel: "Superior", pessoaId: p1.id });
  await Experiencia.create({ empresa: "Tech Ltda", cargo: "Estagiário", pessoaId: p1.id });

  const p2 = await Pessoa.create({ nome: "Ana", email: "ana@test.com", phone: "2222-2222" });
  await Formacao.create({ instituicao: "UFRPE", curso: "SI", nivel: "Superior", pessoaId: p2.id });
  await Experiencia.create({ empresa: "Dev Co", cargo: "Júnior", pessoaId: p2.id });

  return { seeded: true };
}

// Handler HTTP para executar o seed via requisição protegida
export async function runSeed(req, res) {
  try {
    const token = req.get("x-seed-token") || req.query.token;
    const secret = process.env.SEED_SECRET;
    if (!secret) return res.status(403).json({ error: "SEED_SECRET not configured on server" });
    if (!token || token !== secret) return res.status(401).json({ error: "Invalid seed token" });

    const result = await seedDatabase();
    if (result.seeded) return res.json({ message: "Seed executed", result });
    return res.json({ message: "Seed not executed", result });
  } catch (e) {
    console.error("Seed error:", e);
    return res.status(500).json({ error: e.message });
  }
}
