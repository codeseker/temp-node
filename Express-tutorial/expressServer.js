const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.get('/about', (req, res)=>{
    res.send("About Page");
})

app.all("*", (req, res)=>{
    res.status(404).send("Resource not found");
})
app.listen(5000, ()=>{
    console.log('server listening at port 5000');
})
// some methods of express
// app.get -> getData
// app.post -> insertData
// app.delete -> deleteData
// app.put -> updateData
// app.all -> all methods
// app.use 
// app.listen