const express = require('express');
const Route = express.Router();
const {userLogin,createUser} = require('../controller/auth')

    Route
    .post('/login',userLogin)
    .post('/register',createUser)

module.exports = Route

