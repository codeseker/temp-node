require("dotenv").config();
const express = require("express");
const app = express();

const mainRouter = require("./Routes/main");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1", mainRouter);

const start = async () => {
    try {
        app.listen(process.env.PORT, ()=>{
            console.log("Server started...");
        })
    } catch (error) {
        console.log(error)
    }
}

start();