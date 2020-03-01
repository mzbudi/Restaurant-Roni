const express = require('express');
const Route = express.Router();
const {userLogin,createUser} = require('../controller/auth')
const fileUpload = require('../helper/fileUpload')
const upload = fileUpload.single('profile_picture')
const helper = require('../helper')
const multer = require('multer')


const uploadFilter = (req,res,next) =>{
    upload(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            console.log(err)
            return helper.response(res,400,{message : "File Tidak Cocok"})
        }else if (err){
            console.log(err)
            return helper.response(res,400,{message : "File Tidak Cocok"})
        }
        next()
    })
}

    Route
    .post('/login',userLogin)
    .post('/register',uploadFilter,createUser)

module.exports = Route

