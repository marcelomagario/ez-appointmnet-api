"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const env_1 = require("./config/env");
const data_source_1 = require("./database/data-source");
const start = async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        app_1.app.listen(env_1.env.port, () => {
            console.log(`Server running on port ${env_1.env.port}`);
        });
    }
    catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
void start();
//# sourceMappingURL=server.js.map