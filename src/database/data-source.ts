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
  migrations: [],
  synchronize: false,
  logging: false,
});

