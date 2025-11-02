import "reflect-metadata";

import { app } from "./app";
import { env } from "./config/env";
import { AppDataSource } from "./database/data-source";

const start = async () => {
  try {
    await AppDataSource.initialize();
    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

void start();

