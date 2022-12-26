const express = require('express');
const app = express();

const {data} = require('./data');

app.get('/', (req, res)=>{
    res.send('<h1>Home Page. </h1> <a href="/data">Data</a>')
})

app.get('/api/v1', (req, res)=>{
    const newData = data.map((result)=>{
        const {name, id, image} = result;
        return {name, id, image}
    })
    res.json(newData);
})

app.get('/api/v1/:productID', (req, res)=>{
    const {productID} = req.params
    const singleData = data.find((result) => {
        return result.id == Number(productID);
    })
    
    res.json(singleData);
})

app.get('/data/query', (req, res)=>{
    console.log(req.query);
    let sortedData = data;
    const {search, limit} = req.query;

    if(search)
    {
        sortedData = sortedData.filter((result)=>{
            return result.name.startsWith(search);
        })
    }
    if(limit)
    {
        sortedData = sortedData.slice(0, Number(limit));
    }
    res.send(sortedData);
})
app.listen(5000);