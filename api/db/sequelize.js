import { Sequelize } from "sequelize";
import "dotenv/config";

// Configuração do banco: usa sqlite em memória para testes e DATABASE_URL em produção.
const isTest = process.env.NODE_ENV === "test";
const isProd = !!process.env.DATABASE_URL && !isTest;

let sequelize;

if (isTest) {
  // sqlite em memória para testes
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
