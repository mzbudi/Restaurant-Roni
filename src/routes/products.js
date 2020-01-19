const express = require('express');
const Route = express.Router();
const { getAllProducts , deleteProduct, createProduct, updateProduct } = require('../controller/products')
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination : path.join(__dirname + './../../assets/images/'),
    filename : function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage : storage
})

Route
    .get('/',getAllProducts)
    .delete('/:product_id',deleteProduct)
    .put('/:product_id', updateProduct)
    .post('/',upload.single('product_image'),createProduct)

module.exports = Route;