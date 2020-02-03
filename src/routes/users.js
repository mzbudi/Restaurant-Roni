const express = require('express');
const Route = express.Router();
const {getUser,deleteUser,updateUser} = require('../controller/users');
const {authorization} = require('../middleware/authentication')

Route
    .get('/',authorization,getUser)
    .delete('/:user_id',authorization,deleteUser)
    .put('/:user_id',authorization,updateUser)

module.exports = Route