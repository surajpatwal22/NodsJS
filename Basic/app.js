const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    // console.log(req,req.url , req.headers);
    console.log(req.url, req.method);
    if (req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to my home page'); 
        return res.end();
    }
    if (req.url === '/about' &&  req.method ==='POST'){
        // res.writeHead(200,{'Content-Type':'text/plain'});
        // res.end('Welcome to my about page');
        // return res.end(); 
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        // on is event listner here , here we pass 2 parameters , first what we want and second call back function
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
    }
    
    // process.exit();
    // it will execute only one time and then it will stop the server
    res.setHeader('Content-Type', 'text/html');

    // res.send('<h1>Hello from my Node.js Server</h1>');

    res.write('<h1>Hello from my Node.js Server</h1>');
    res.end();
})



server.listen(3000);