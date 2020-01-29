const express = require('express');
const Route = express.Router();
const {
    getAllCategory,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory,
    } = require('../controller/category');
const {authorization} = require('../middleware/authentication');

Route
    .get('/', getAllCategory)
    .get('/:category_id', getCategory)
    .put('/:category_id',authorization, updateCategory)
    .post('/',authorization, createCategory)
    .delete('/:category_id',authorization, deleteCategory)

module.exports = Route