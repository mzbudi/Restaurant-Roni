const express = require('express');
const Route = express.Router();
const {getUser} = require('../controller/users');

Route
    .get('/',getUser)

module.exports = Route