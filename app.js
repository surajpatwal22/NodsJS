// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const errorController = require('./controller/error'); 

// app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);
 
app.use(errorController.notFound); 

// server.listen(3000);
app.listen(3000);