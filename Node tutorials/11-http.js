const http = require('http');
const { readFileSync } = require('fs')
const server = http.createServer((req, res) => {

    // to write anything in response we use write() method
    if (req.url === '/about') {
        res.end("This is our about page");
        //res.end();
    }
    else if (req.url === '/contact') {
        res.end("This is contact page");
    }
    else if (req.url === '/') {
        res.write("Welcome to my server");
        res.end();
    }
    else if (req.url === '/first') {
        let first = ``;
        first = readFileSync('./content/first.txt', 'utf-8')
        res.end(`<p>${first}</p>`);
    }
    else if(req.url === '/second')
    {
        let second = readFileSync('./content/second.txt', 'utf8');
        res.end(`<p>${second}</p>`)
    }
    else if(req.url === '/index')
    {
        let index = readFileSync('./index.html', 'utf8');
        res.end(index);
    }
    else {
        res.end(`
        <h1>Oops Wrong Url.</h1>
        <p> Please check the url again.</p>
        <a href='/'>Go home</a>`)
    }
})

const port = 5000;
server.listen(port);
console.log(`Server started at http://localhost:${port}`);