const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.end("Home page");
    }
    if(req.url === '/about')
    {
        // BLOCKING CODE !!!!
        //this code blocks all the req server for all users this is a bad practice
        for(let i=0; i<100000; i++)
        {
            for(let j=0; j<100000; j++)
            {
                console.log(`${i}, ${j}`)
            }
        }
        res.end("About page");
    }
    if(req.url === '/contact')
    {
        res.end("contact page")
    }
})

server.listen(5000, ()=>{
    console.log("Server listening at: 5000");
})