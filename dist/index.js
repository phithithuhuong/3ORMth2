"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./src/data-source");
const body_parser_1 = __importDefault(require("body-parser"));
const PhoneBook_1 = require("./src/entity/PhoneBook");
data_source_1.AppDataSource.initialize().then(async (connection) => {
    const app = (0, express_1.default)();
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.use(body_parser_1.default.json());
    app.use(express_1.default.json());
    const PhoneBookRepo = connection.getRepository(PhoneBook_1.PhoneBook);
    app.get("/phone/create", (req, res) => {
        res.render("create");
    });
    app.post("/phone/create", upload.none(), async (req, res) => {
        const phoneData = {
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone
        };
        const phone = await PhoneBookRepo.save(phoneData);
        res.render("success");
    });
    app.get("/phone/list", async (req, res) => {
        const phoneBooks = await PhoneBookRepo.find();
        console.log(phoneBooks);
        res.render("list", { phoneBooks: phoneBooks });
    });
    app.listen(2030, () => {
        console.log("http://localhost:2030/phone/create");
    });
});
//# sourceMappingURL=index.js.map