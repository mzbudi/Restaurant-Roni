// const express = require('express');
const {
    getAll,
    deleteProduct,
    createProduct,
    updateProduct,
    getSearchByName,
    sortFunction,
    getNamebyCatorDate
    } = require('../models/products');

const helper = require('../helper')

module.exports = {
    getAllProducts : async (req,res)=>{
        try {
            const data = {
                nameSearch : req.query.nameSearch,
                category_id : req.query.category_id,
                date : req.query.date
            }
            const {nameSearch, category_id,date} = data
            // console.log(data);
            // console.log(nameSearch,category_id,date);
            if((nameSearch == undefined && category_id == undefined) && date == undefined){
                resultAll = await getAll();
                return helper.response(res,200,resultAll);
            }else if(nameSearch != undefined){
                if(category_id != undefined){
                        resultNameCatDate = await getNamebyCatorDate(nameSearch,category_id);
                        return helper.response(res,200,resultNameCatDate);
                }else if(date != undefined){
                        resultNameCatDate = await getNamebyCatorDate(nameSearch,date);
                        return helper.response(res,200,resultNameCatDate);
                }else{
                    resultName = await getSearchByName(nameSearch)
                    return helper.response(res,200,resultName);
                }
            }else if(category_id != undefined){
                resultCategory = await sortFunction(category_id);
                return helper.response(res,200,resultCategory);
            }else{
                resultDate = await sortFunction(date);
                return helper.response(res,200,resultDate);
            }
        } catch (error) {
            // return helper.response(res,400,error);
            throw error
        }

    },
    deleteProduct : async (req,res)=>{
        try {
            const id = req.params.product_id;
            const result = await deleteProduct(id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,error);
        }
    },
    createProduct : async (req,res)=>{
        try {
            const setData = {
                category_id : req.body.category_id,
                product_name : req.body.product_name,
                product_description : req.body.product_description,
                product_image : req.file.path,
                product_price : req.body.product_price,
            }
            const result = await createProduct(setData);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,error);
        }
    },
    updateProduct : async (req,res)=>{
        try {
            const setData = {
                category_id : req.body.category_id,
                product_name : req.body.product_name,
                product_description : req.body.product_description,
                product_image : req.file.path,
                product_price : req.body.product_price,
            }
            const id = req.params.product_id
            const result = await updateProduct(setData,id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,error);
        }
    },
    getSearchByName : async (req,res)=>{
        try {
            const nameSearch = req.body.searchKeyword
            const result = await getSearchByName(nameSearch);
            return helper.response(res,200,result);
        } catch (error) {
            throw error
        }
    },
    sortFunction : async (req,res)=>{
        try {
            const sorterName = req.body.sorterName
            const result = await sortFunction(sorterName);
            return helper.response(res,200,result)
        } catch (error) {
            return helper.response(res,400,result)
        }
    }
}
