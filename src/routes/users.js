const express = require('express');
const Route = express.Router();
const fileUpload = require('../helper/fileUpload');
const {getUser,deleteUser,updateUser,changePassword , changeProfile, getProfile} = require('../controller/users');
const {authorization} = require('../middleware/authentication');
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
    .get('/',authorization,getUser)
    .get('/profile/:user_id',authorization,getProfile)
    .delete('/:user_id',authorization,deleteUser)
    .put('/:user_id',authorization,updateUser)
    .put('/changePassword/:user_id',authorization,changePassword)
    .put('/changeProfile/:user_id',uploadFilter,authorization,changeProfile)

module.exports = Route