import {Router} from "express";
import { dbconnection } from "../config/db.js";

const routes  = Router();

const getAllQuery = "SELECT * FROM products"

routes.post("/", (req, res) => {
    
    const {name, price, stock} = req.body
    console.log("req body", req.body)
    if(name && price && stock) {
        res.status(400)
    }
    if(price < 0  || stock < 0) {
         res.status(400)
    }
    
    const saveToDatabase = dbconnection.query(`INSERT INTO products(name, price, stock) values(${name}, ${price}, ${stock})`, (err) => {
        console.log("err", err.code)
        if(err.code) {
            res.status(400).json({error:true, message:JSON.stringify(err)});
        }
        res.status(201)
    })


})

routes.get("/:id", async (req, res) => {

    const id = req.params.id
    console.log("id", req.params.id)

    const products = dbconnection.query(getAllQuery, (err, fields, rows) => {
        if(err) {
            throw new Error(JSON.stringify(err));
        }
        const foundOneProduct = fields.find(field => Number(field.id) === Number(id));
        console.log("found", foundOneProduct)
        res.status(200).json({foundOneProduct})

    });

    
});

routes.get("/", (req, res)=>{
    const products = dbconnection.query(getAllQuery, (err, fields, rows) => {
        if(err) {
            throw new Error(JSON.stringify(err));
        }
        const sortedProducts = fields.sort((a, b) => a - b)
         res.status(200).json(sortedProducts)
    });
});






export default routes;









