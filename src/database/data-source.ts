import { DataSource } from "typeorm";
import { env } from "../config/env";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: env.databaseUrl,
  entities: [],
  migrations: [],
  synchronize: false,
  logging: false,
});

