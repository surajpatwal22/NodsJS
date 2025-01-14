const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');


const router = express.Router();

router.get('/',(req,res, next)=>{
    // res.send('<h1>Hello from Express</h1>');
    //send file 
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    console.log(adminData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});
module.exports = router;