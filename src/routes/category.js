const express = require('express');
const Route = express.Router();
const {
    getAllCategory,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory,
    } = require('../controller/category');

Route
    .get('/', getAllCategory)
    .get('/:category_id', getCategory)
    .put('/:category_id', updateCategory)
    .post('/', createCategory)
    .delete('/:category_id', deleteCategory)

module.exports = Route