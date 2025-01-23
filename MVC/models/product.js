const products = [];
const fs = require('fs');
const Path = require('path');
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save(){
        // products.push(this);
        const p =  Path.join(Path.dirname(process.mainModule.filename),'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
        console.log(fileContent);
        let products = [];
        if(!err){
            products = JSON.parse(fileContent);
        }
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
        });
        
        });
    }
    static fetchAll(cb){
        const p =  Path.join(Path.dirname(process.mainModule.filename),'data','products.json');
        fs.writeFile(p,(err , fileContent)=>{  
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
            // console.log(err);
        });
        // return products;
    }
}
