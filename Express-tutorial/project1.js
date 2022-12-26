const http = require('http');
const {readFileSync} = require('fs');

// include all files
const homePage = readFileSync('./app1/index.html');
const homeStyles = readFileSync('./app1/styles.css');
const homeLogic = readFileSync('./app1/index.js')
const server = http.createServer((req, res)=>{

    if(req.url === '/')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(homePage);
    }
    else if(req.url === '/about')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(aboutPage);
    }
    else if(req.url === '/contact')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Contact Page </h1>')
    }
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(homeStyles);
    }
    else if(req.url === '/index.js')
    {
        res.writeHead(200, {'content-type': 'text/js'});
        res.end(homeLogic);
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("Error");
    }

    
}).listen(5000);
