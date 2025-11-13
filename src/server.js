import "dotenv/config";
import { sequelize } from "./db/sequelize.js";
import app from "./app.js";
import { seedDatabase } from "./controllers/seedController.js";

const port = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Banco Ok — modelos sincronizados.");

    if (process.env.SEED === "true" || process.env.NODE_ENV !== "production") {
      try {
        await seedDatabase();
      } catch (e) {
        console.warn("Seed falhou:", e.message);
      }
    }

    app.listen(port, () => console.log(`Servidor local rodando na porta ${port}`));
  } catch (e) {
    console.error("Erro ao iniciar localmente:", e.message);
    process.exit(1);
  }
}

if (process.argv[1] && process.argv[1].endsWith("server.js")) {
  start();
}

export default start;
