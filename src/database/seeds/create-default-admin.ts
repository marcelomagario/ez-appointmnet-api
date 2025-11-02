import "reflect-metadata";

import bcrypt from "bcryptjs";

import { AppDataSource } from "../data-source";
import { Admin } from "../entities/Admin";

const DEFAULT_ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL ?? "admin@ez-appointment.com";
const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD ?? "ChangeMe123!";
const DEFAULT_ADMIN_NAME = process.env.DEFAULT_ADMIN_NAME ?? "Administrator";

const createDefaultAdmin = async () => {
  try {
    await AppDataSource.initialize();
    const adminRepository = AppDataSource.getRepository(Admin);

    const existingAdmin = await adminRepository.findOne({ where: { email: DEFAULT_ADMIN_EMAIL } });
    if (existingAdmin) {
      console.log("Default admin already exists");
      return;
    }

    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);

    const admin = adminRepository.create({
      name: DEFAULT_ADMIN_NAME,
      email: DEFAULT_ADMIN_EMAIL,
      passwordHash,
    });

    await adminRepository.save(admin);
    console.log(`Default admin created with email ${DEFAULT_ADMIN_EMAIL}`);
  } catch (error) {
    console.error("Failed to create default admin", error);
    process.exitCode = 1;
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
};

void createDefaultAdmin();

