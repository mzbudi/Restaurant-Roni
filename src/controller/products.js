// const express = require('express');
const {
    getAll,
    deleteProduct,
    createProduct,
    updateProduct
    } = require('../models/products');

module.exports = {
    getAllProducts : async (req,res)=>{
        const result = await getAll();
        return res.json(result);
    },
    deleteProduct : async (req,res)=>{
        try {
            const id = req.params.product_id;
            // console.log(id);
            const result = await deleteProduct(id);
            return res.json(result);
        } catch (error) {
            throw error;
        }
    },
    createProduct : async (req,res)=>{
        try {
            const setData = {
                category_id : req.body.category_id,
                product_name : req.body.product_name,
                product_description : req.body.product_description,
                product_image : req.body.product_image,
                product_price : req.body.product_price,
            }
            const result = await createProduct(setData);
            return res.json(result)
        } catch (error) {
            throw error
        }
    },
    updateProduct : async (req,res)=>{
        try {
            const setData = {
                category_id : req.body.category_id,
                product_name : req.body.product_name,
                product_description : req.body.product_description,
                product_image : req.body.product_image,
                product_price : req.body.product_price,
            }
            const id = req.params.product_id
            const result = await updateProduct(setData,id);
            return res.json(result)
        } catch (error) {
            return error
        }
    },
}
