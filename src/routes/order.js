const express = require('express');
const Route = express.Router();
const { addOrder, getAllOrders, getOrderById, getOrderDetailById } = require('../controller/order');
const { authorization } = require('../middleware/authentication')
const { orderCheck } = require('../middleware/orderCheck')

Route
    .post('/', authorization, orderCheck, addOrder)
    .get('/', authorization, getAllOrders)
    .get('/:user_id', authorization, getOrderById)
    .get('/history/:user_id', authorization, getOrderDetailById)

module.exports = Route;