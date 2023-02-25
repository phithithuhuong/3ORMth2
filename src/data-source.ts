
import "reflect-metadata"

import { DataSource } from "typeorm"
import {PhoneBook} from "./entity/PhoneBook";



export const AppDataSource = new DataSource({

    type: "mysql",

    host: "localhost",

    port: 3306,

    username: "root",

    password: "123456",

    database: "dbTest",

    synchronize: true,

    logging: false,

    entities: [PhoneBook],

    migrations: ["dist/src/migrations/*.js"],

})