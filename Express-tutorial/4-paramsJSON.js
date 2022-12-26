const express = require('express');
const app = express();

const {data} = require('./data');

app.get('/', (req, res)=>{
    res.send('<h1>Home Page. </h1> <a href="/data">Data</a>')
})

app.get('/data', (req, res)=>{
    const newData = data.map((result)=>{
        const {name, id, image} = result;
        return {name, id, image}
    })
    res.json(newData);
})

// getting a single product using /api/data/1 -> that means return the first product

// app.get('/data/1', (req, res)=>{
//     const singleData = data.find((result) => {
//         return result.id == 1
//     })
//     res.json(singleData);
// })

app.get('/data/:productID', (req, res)=>{
    const {productID} = req.params
    const singleData = data.find((result) => {
        return result.id == Number(productID);
    })
    res.json(singleData);
})

app.listen(5000);