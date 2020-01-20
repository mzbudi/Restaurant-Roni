const express = require('express');
const Route = express.Router();

const product = require('./routes/products.js');
const category = require('./routes/category.js');
const order = require('./routes/order.js')

Route.use('/products', product);
Route.use('/category', category);
Route.use('/order', order);

module.exports = Route;