import { Sequelize } from "sequelize";
import "dotenv/config";

// Decisão simples de ambiente:
// - se DATABASE_URL estiver setado (ex: Heroku), usa ele;
// - caso contrário usa um fallback local (postgres padrão) — ajuste se preciso.
const isProd = !!process.env.DATABASE_URL;
const connectionString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/curriculo";

// Criando a instância do Sequelize. Mantemos logging desligado pra não poluir o output.
// Em produção, habilitamos ssl de forma segura (rejectUnauthorized false permite conexões em alguns provedores).
const sequelize = new Sequelize(connectionString, {
  dialect: "postgres",
  logging: false,
  dialectOptions: isProd ? { ssl: { require: true, rejectUnauthorized: false } } : undefined,
});

// Exporta só o que a app precisa — simples e direto.
export { sequelize };
