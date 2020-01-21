const express = require('express');
const Route = express.Router();
const fileUpload = require('../helper/fileUpload')
const { getAllProducts , deleteProduct, createProduct, updateProduct, getById } = require('../controller/products')


Route
    .get('/',getAllProducts)
    .delete('/:product_id',deleteProduct)
    .put('/:product_id',fileUpload.single('product_image'), updateProduct)
    .post('/',fileUpload.single('product_image'),createProduct)
    .get('/:product_id', getById)
    // .get('/sort',sortFunction)

module.exports = Route;