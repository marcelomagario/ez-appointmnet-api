import path from "node:path";

import { DataSource } from "typeorm";

import { env } from "../config/env";
import { Admin } from "./entities/Admin";
import { Appointment } from "./entities/Appointment";
import { Availability } from "./entities/Availability";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: env.databaseUrl,
  entities: [Admin, User, Appointment, Availability],
  migrations: [path.join(__dirname, "migrations/*.{ts,js}")],
  synchronize: false,
  logging: false,
});

