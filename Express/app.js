const http = require('http');
const express = require('express');
const app = express();


const server = http.createServer(app);

app.use('/',(req,res, next)=>{
    console.log('first middleware , which always runs');
    next();
    // next() is used to pass the request to the next middleware in the chain
});
// app.use() is a function that takes a middleware function as an argument
// and adds it to the middleware chain of the Express application

app.use('/products',(req,res, next)=>{
    console.log('second middleware , which only runs when the URL is /products');
    res.send('<h1>Products</h1>');
});

app.use((req,res, next)=>{
    res.send('<h1>Hello from Express</h1>');
    // res.end() is a method that sends a response to the client and it is used in the core http module
    // but we can't use it here because we are using express which has its own methods for sending responses

});
// if next() is not called, the request will not be passed to the next middleware in the chain
// and the request will be terminated at the current middleware

// app.use((req,res, next)=>{
//     console.log('third middleware');
// });


// server.listen(3000);
app.listen(3000);