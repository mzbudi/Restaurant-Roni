const express = require('express');
const Route = express.Router();
const {addOrder}= require('../controller/order')

Route
    .get('/')
    .post('/', addOrder)

module.exports = Route;