import { Sequelize } from "sequelize";
import "dotenv/config";

// Suporte a ambiente de teste com sqlite em memória para facilitar testes automatizados.
const isTest = process.env.NODE_ENV === "test";
const isProd = !!process.env.DATABASE_URL && !isTest;

let sequelize;

if (isTest) {
  // sqlite em memória — rápido e sem dependências externas para CI/local tests
  sequelize = new Sequelize({ dialect: "sqlite", storage: ":memory:", logging: false });
} else {
  const connectionString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/curriculo";
  sequelize = new Sequelize(connectionString, {
    dialect: "postgres",
    logging: false,
    dialectOptions: isProd ? { ssl: { require: true, rejectUnauthorized: false } } : undefined,
  });
}

export { sequelize };
