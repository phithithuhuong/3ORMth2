"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const PhoneBook_1 = require("./entity/PhoneBook");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "dbTest",
    synchronize: true,
    logging: false,
    entities: [PhoneBook_1.PhoneBook],
    migrations: ["dist/src/migrations/*.js"],
});
//# sourceMappingURL=data-source.js.map