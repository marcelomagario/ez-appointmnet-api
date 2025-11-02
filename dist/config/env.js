"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const requiredEnvVars = ["PORT", "DATABASE_URL"];
requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Environment variable ${key} is not set.`);
    }
});
exports.env = {
    port: Number(process.env.PORT) || 3000,
    databaseUrl: process.env.DATABASE_URL,
};
//# sourceMappingURL=env.js.map