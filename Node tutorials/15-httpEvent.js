const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=>{

    if(req.url === '/')
    {
        res.end(`<h1>Home Page</h1>`);
    }
    else if(req.url === '/about')
    {
        res.end(`<h1>About Page</h1>`);
    }
    else if(req.url === '/contact')
    {
        res.end(`<h1>Contact Page</h1>`);
    }
    else{
        res.end(`
        <h1>OOPS !</h1>
        <p>Wrong url</p>
        <a href="/">Go Home</a>`)
    }
})


server.listen(5000);