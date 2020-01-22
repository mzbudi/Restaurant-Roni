const express = require('express');
const Route = express.Router();
const fileUpload = require('../helper/fileUpload')
const { getAllProducts , deleteProduct, createProduct, updateProduct, getById } = require('../controller/products')
const {authorization} = require('../middleware/authentication')

Route
    .get('/',authorization, getAllProducts)
    .delete('/:product_id',authorization, deleteProduct)
    .put('/:product_id',authorization, fileUpload.single('product_image'), updateProduct)
    .post('/',authorization,fileUpload.single('product_image'),createProduct)
    .get('/:product_id',authorization, getById)
    // .get('/sort',sortFunction)

module.exports = Route;