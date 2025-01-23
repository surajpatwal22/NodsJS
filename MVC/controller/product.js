const Product = require('../models/product');

exports.getProducts = (req,res, next)=>{
    // const products = new Product();
    const products = Product.fetchAll();
    res.render('shop', {
        prods: Products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });  
}
exports.addProduct = (req,res, next)=>{
    res.render('add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-product'
    })
}

exports.getAddProduct = (req,res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}