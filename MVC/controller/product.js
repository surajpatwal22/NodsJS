
const products = [];
exports.getProducts = (req,res, next)=>{
 
    res.render('shop', {
        prods: products,
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
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
}