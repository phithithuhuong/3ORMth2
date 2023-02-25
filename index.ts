import multer from "multer";
const upload = multer();
import express from "express";
import {AppDataSource} from "./src/data-source";
import bodyParser from "body-parser";
import {PhoneBook} from "./src/entity/PhoneBook";
AppDataSource.initialize().then(async connection=>{
    const app = express();

    app.set("view engine", "ejs");

    app.set("views", "./src/views");

    app.use(bodyParser.json());

    app.use(express.json());

    const PhoneBookRepo = connection.getRepository(PhoneBook);


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
        console.log(phoneBooks)

        res.render("list", { phoneBooks: phoneBooks })

    });



    app.listen(2030,()=>{
        console.log("http://localhost:2030/phone/create")
    })
})
