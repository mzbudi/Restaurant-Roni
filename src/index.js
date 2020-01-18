const express = require('express');
const Route = express.Router();

const product = require('./routes/products.js');

Route.use('/products', product);

module.exports = Route;