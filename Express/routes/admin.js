const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../utils/path');

router.get('/add-products',(req,res, next)=>{
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));

    
});
router.post('/product',(req,res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;