const connection = require('../config/mysql');
const fs = require('fs');

module.exports={
    getUser : ()=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT user_id, user_role, username, name, created_at FROM user`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    deleteUser : (user_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`DELETE FROM user WHERE user_id = ${user_id}`, (err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    updateUser : (setData, id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE user SET ? WHERE user_id = ?',[setData,id],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    getProfile : (id)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT username, name, profile_picture FROM user WHERE user_id = ${id}`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    }
}