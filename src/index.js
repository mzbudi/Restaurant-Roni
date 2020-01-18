const express = require('express');
const Route = express.Router();

const product = require('./routes/products.js');
const category = require('./routes/category.js');

Route.use('/products', product);
Route.use('/category', category);

module.exports = Route;