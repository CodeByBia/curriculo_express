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

    // Execute seed somente quando explicitamente solicitado via SEED=true
    if (process.env.SEED === "true") {
      try {
        await seedDatabase();
      } catch (e) {
        console.warn("Seed falhou:", e.message);
      }
    }

    const server = app.listen(port, () => console.log(`Servidor local rodando na porta ${port}`));

    // Fechamento gracioso: fecha servidor e conexão com o DB em sinais de término
    const shutdown = async () => {
      try {
        console.log('Fechando servidor...');
        server.close(() => console.log('HTTP server fechado'));
        await sequelize.close();
        console.log('Conexão com DB fechada');
        process.exit(0);
      } catch (err) {
        console.error('Erro durante shutdown:', err.message);
        process.exit(1);
      }
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
    // Nodemon usa SIGUSR2 para reiniciar - replicamos comportamento comum
    process.once('SIGUSR2', () => { shutdown().then(() => process.kill(process.pid, 'SIGUSR2')); });
  } catch (e) {
    console.error("Erro ao iniciar localmente:", e.message);
    process.exit(1);
  }
}

if (process.argv[1] && process.argv[1].endsWith("server.js")) {
  start();
}

export default start;
