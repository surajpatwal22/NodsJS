const express = require('express');
const path = require('path');
const productController = require('../controller/product'); 


const router = express.Router();
const products = [];

router.get('/add-products',productController.addProduct);

router.post('/products',productController.getAddProduct);
 
exports.routes = router;
exports.products = products;