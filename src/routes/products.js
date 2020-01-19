const express = require('express');
const Route = express.Router();
const fileUpload = require('../helper/fileUpload')
const { getAllProducts , deleteProduct, createProduct, updateProduct } = require('../controller/products')


Route
    .get('/',getAllProducts)
    .delete('/:product_id',deleteProduct)
    .put('/:product_id',fileUpload.single('product_image'), updateProduct)
    .post('/',fileUpload.single('product_image'),createProduct)

module.exports = Route;