const express = require('express');
const path = require('path');
const app = express();

// setting static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './app1/index.html'));
// })

app.listen(5000)