const express = require('express');
const Route = express.Router();
const {addOrder, getAllOrders, getOrderById, getOrderDetailById}= require('../controller/order');
const {authorization} = require('../middleware/authentication')

Route
    .post('/',authorization, addOrder)
    .get('/',authorization, getAllOrders)
    .get('/:user_id',authorization,getOrderById)
    .get('/history/:user_id',authorization,getOrderDetailById)

module.exports = Route;