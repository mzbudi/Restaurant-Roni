const express = require('express');
const Route = express.Router();

const product = require('./routes/products.js');
const category = require('./routes/category.js');
const order = require('./routes/order.js');
const auth = require('./routes/auth.js');
const users = require('./routes/users.js');

Route.use('/products', product);
Route.use('/category', category);
Route.use('/order', order);
Route.use('/auth', auth);
Route.use('/users', users);

module.exports = Route;