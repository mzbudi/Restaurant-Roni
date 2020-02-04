const express = require('express');
const Route = express.Router();
const {addOrder, getAllOrders, getOrder}= require('../controller/order');
const {authorization} = require('../middleware/authentication')

Route
    .post('/',authorization, addOrder)
    .get('/',authorization, getAllOrders)

module.exports = Route;