require("dotenv").config();
const express = require('express');
const app = express();
const productsRoute = require('./Routes/products');
const connectDB = require('./db/db');

app.use(express.json());
app.use("/api/v1/products", productsRoute);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, ()=>{
            console.log("Server started...");
        })
    } catch (error) {
        console.log(error);
    }
}

start();