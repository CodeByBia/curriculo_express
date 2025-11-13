#!/usr/bin/env node
import "dotenv/config";
import { seedDatabase } from "../src/controllers/seedController.js";

async function run() {
  try {
    // requer que SEED_SECRET esteja definido para prevenir execuções acidentais
    if (!process.env.SEED_SECRET) {
      console.error("Please set SEED_SECRET environment variable before running seed script.");
      process.exit(1);
    }

    const result = await seedDatabase();
    console.log("Seed result:", result);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
