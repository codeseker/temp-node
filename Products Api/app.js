const express = require('express');
const app = express();


app.use(express.json());
app.get('/', (req, res) => {
    res.send(`<h1> Products api </h1> <a href="/api/v1/products">Go to products</a> `)
})
app.listen(3000, () => {
    console.log(`Server started at: http://localhost:3000`);
})
