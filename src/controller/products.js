// const express = require('express');
const {
    getAll,
    deleteProduct,
    createProduct,
    updateProduct,
    getSearchByName,
    sortFunction,
    getById,
    } = require('../models/products');

const helper = require('../helper')

module.exports = {
    getAllProducts : async (req,res)=>{
        try {
            const data = {
                nameSearch : req.query.nameSearch,
                product_name : req.query.product_name,
                category_id : req.query.category_id,
                date : req.query.date,
                limit : req.query.limit,
                page : req.query.page,
            }
            let {nameSearch, product_name, category_id, date ,page, limit} = data
            nameSearch == undefined || nameSearch == '' ?  nameSearch = '' : nameSearch;
            category_id == undefined || category_id == '' ?  category_id = '' : category_id = 'category_id asc,';
            product_name == undefined || product_name == '' ?  product_name = '' : product_name = 'product_name asc,';
            date == undefined || date =='' ?  date = '' : date = 'updated_at desc,';
            limit == undefined || limit == '' ?  limit = '1000' : limit;
            page == undefined || page == ''?  page = '0' : page *= 5;
            const result = await getAll(nameSearch,product_name,category_id,date,limit,page);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,error);
        }

    },
    deleteProduct : async (req,res)=>{
        try {
            const id = req.params.product_id;
            const result = await deleteProduct(id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,{message: "Data Tidak ada"});
        }
    },
    createProduct : async (req,res)=>{
        try {
            let errorArr = []
            const setData = {
                category_id : req.body.category_id,
                product_name : req.body.product_name,
                product_description : req.body.product_description,
                product_image : req.file.path,
                product_price : req.body.product_price,
            }
           const {category_id, product_name, product_description, product_price} = setData;
           category_id == undefined || category_id == '' ?  errorArr.push(1) : errorArr;
           product_name == undefined || product_name == '' ?  errorArr.push(1) : errorArr;
           product_description == undefined || product_description == '' ?  errorArr.push(1) : errorArr;
           product_price == undefined || product_price == '' ?  errorArr.push(1) : errorArr;
           if (errorArr.length > 0) {
                return helper.response(res,400,{message : "Data Tidak Lengkap"});
           } else {
                const result = await createProduct(setData);
                return helper.response(res,200,{message : "Data Berhasil di Input", product_id: result.insertId});
           }
        } catch (error) {
            return helper.response(res,400,{message : "Data Tidak Lengkap"});
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
            let errorArr = []

            const {category_id, product_name, product_description, product_price} = setData;
            category_id == undefined || category_id == '' ?  errorArr.push(1) : errorArr;
            product_name == undefined || product_name == '' ?  errorArr.push(1) : errorArr;
            product_description == undefined || product_description == '' ?  errorArr.push(1) : errorArr;
            product_price == undefined || product_price == '' ?  errorArr.push(1) : errorArr;
            id == undefined || id == '' ? errorArr.push(1) : errorArr;
            
            if (errorArr.length > 0) {
                return helper.response(res,400,{message : "Data Tidak Lengkap"});
            } else {
            const result = await updateProduct(setData,id);
            return helper.response(res,200,result);
            }
        } catch (error) {
            return helper.response(res,400,{message : "Data Tidak Lengkap / Tidak ada"});
        }
    },
    getSearchByName : async (req,res)=>{
        try {
            const nameSearch = req.body.searchKeyword
            const result = await getSearchByName(nameSearch);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,{message : "Data Tidak Ada"});
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
    },
    getById : async (req,res)=>{
        try {
            const product_id = req.params.product_id;
            const result = await getById(product_id)
            if(result.length < 1){
                return helper.response(res,400,{message : "Data Tidak Ada"});
            }
            return helper.response(res,200,result)
        } catch (error) {
            return helper.response(res,400,{message : "Data Tidak Ada"});
        }
    }
}
