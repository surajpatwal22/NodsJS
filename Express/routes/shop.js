const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const adminData = require('./admin');


const router = express.Router();

router.get('/',(req,res, next)=>{
    // res.send('<h1>Hello from Express</h1>');
    //send file 
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    console.log(adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });  
});
module.exports = router;