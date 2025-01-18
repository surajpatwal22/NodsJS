const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../utils/path');
const products = [];

router.get('/add-products',(req,res, next)=>{
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
router.post('/products',(req,res, next)=>{
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
});

// module.exports = router;
//work on singe exports and imports
exports.routes = router;
exports.products = products;