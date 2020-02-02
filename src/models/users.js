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
}