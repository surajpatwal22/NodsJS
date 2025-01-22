const path = require('path');
const express = require('express');
const adminData = require('./admin');
const productController = require('../controller/product'); 


const router = express.Router();

router.get('/',productController.getProducts);
module.exports = router;