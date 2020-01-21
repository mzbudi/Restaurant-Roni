const express = require('express');
const Route = express.Router();
const {addOrder, getAllOrders, getOrder}= require('../controller/order')

Route
    .get('/',getAllOrders)
    .post('/', addOrder)
    .get('/:order_id',getOrder)

module.exports = Route;