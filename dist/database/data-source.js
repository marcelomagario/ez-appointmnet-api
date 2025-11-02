"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const env_1 = require("../config/env");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: env_1.env.databaseUrl,
    entities: [],
    migrations: [],
    synchronize: false,
    logging: false,
});
//# sourceMappingURL=data-source.js.map