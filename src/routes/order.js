const express = require('express');
const Route = express.Router();
const {addOrder, getAllOrders, getOrder}= require('../controller/order');
const {authorization} = require('../middleware/authentication')

Route
    .get('/',authorization,getAllOrders)
    .post('/',authorization, addOrder)
    .get('/',authorization,getOrder)

module.exports = Route;