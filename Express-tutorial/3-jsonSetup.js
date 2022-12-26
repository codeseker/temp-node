const express = require('express');
const app = express();

const {data} = require('./data');

app.get('/', (req, res)=>{
    res.json(data)
})

app.listen(5000, ()=>{
    console.log("Server started");
})