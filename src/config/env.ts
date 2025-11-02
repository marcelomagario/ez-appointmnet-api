import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["PORT", "DATABASE_URL"] as const;

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is not set.`);
  }
});

export const env = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL as string,
};

