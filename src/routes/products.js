const express = require('express');
const Route = express.Router();
const fileUpload = require('../helper/fileUpload')
const { getAllProducts , deleteProduct, createProduct, updateProduct, getById } = require('../controller/products')
const {authorization} = require('../middleware/authentication')
const upload = fileUpload.single('product_image')
const helper = require('../helper')
const multer = require('multer')

const uploadFilter = (req,res,next) =>{
    upload(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            return helper.response(res,400,{message : "File Tidak Cocok"})
            throw err
        }else if (err){
            return helper.response(res,400,{message : "File Tidak Cocok"})
            throw err
        }
        next()
    })
}


Route
    .get('/', getAllProducts)
    .delete('/:product_id',authorization, deleteProduct)
    .put('/:product_id',authorization, uploadFilter, updateProduct)
    .post('/',authorization,uploadFilter,createProduct)
    .get('/:product_id',authorization, getById)
    // .get('/sort',sortFunction)

module.exports = Route;

// function(req,res){
//     upload(req,res,function(err){
//         if(err){
//             return helper.response(res,400,err)
//         }else if(!err){
//             return helper.response(res,400,err)
//         }
//     })
// }