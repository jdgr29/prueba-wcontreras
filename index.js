import express from "express";
import productRoutes from "./routes/products.routes.js"
import morgan from "morgan";
const app = express();
app.use(morgan("dev"))
app.use(express.json());
app.use("/products", productRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`$server up and running at port ${PORT}`);
})

