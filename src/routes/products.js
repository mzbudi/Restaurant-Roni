const express = require('express');
const Route = express.Router();
const { getAllProducts , deleteProduct, createProduct, updateProduct } = require('../controller/products')

Route
    .get('/',getAllProducts)
    .delete('/:product_id',deleteProduct)
    .put('/:product_id', updateProduct)
    .post('/', createProduct)

module.exports = Route;