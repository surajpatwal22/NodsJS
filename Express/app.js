// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);


// const server = http.createServer(app);

// app.use('/',(req,res, next)=>{
//     console.log('first middleware , which always runs');
//     next();
//     // next() is used to pass the request to the next middleware in the chain
// });
// app.use() is a function that takes a middleware function as an argument
// and adds it to the middleware chain of the Express application

// app.use('/add-products',(req,res, next)=>{
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    
// });
// app.use('/product',(req,res, next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });
// app.use('/products',(req,res, next)=>{
//     console.log('second middleware , which only runs when the URL is /products');
//     res.send('<h1>Products</h1>');
// });

// app.use((req,res, next)=>{
//     res.send('<h1>Hello from Express</h1>');
//     // res.end() is a method that sends a response to the client and it is used in the core http module
//     // but we can't use it here because we are using express which has its own methods for sending responses
// });
// if next() is not called, the request will not be passed to the next middleware in the chain
// and the request will be terminated at the current middleware

// app.use((req,res, next)=>{
//     console.log('third middleware');
// });

app.use((req,res, next)=>{
    // res.status(404).send('<h1>Page Not Found</h1>');
    // res.sendFile(path.join(__dirname,'views','404.html'));
    res.render('404', {pageTitle:'Page Not Found'});
}); 

// server.listen(3000);
app.listen(3000);