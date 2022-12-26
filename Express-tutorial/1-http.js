const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url === '/about')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>About Page </h1>');
    }
    else if(req.url === '/contact')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Contact Page </h1>')
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('<h1> 404 Not Found </h1>');
    }

    
}).listen(5000);
