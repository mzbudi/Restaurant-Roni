const connection = require('../config/mysql');

module.exports = {
    userLogin : (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT user_id, user_role, username, name, profile_picture, created_at FROM user WHERE username = ? AND password = ?',[data.username, data.password],(err,res)=>{
                if(!err){
                    if(res.length >= 0 ){
                        resolve(res);
                    }
                    reject(new Error(err));
                }
                reject(new Error(err));
            })
        })
    },
    userLoginKey : (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT p_key FROM user WHERE username = ?',[data.username],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err))
            })
        })
    },
    createUser : (setData)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO user SET ?',setData, (err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err))
            })
        })
    },
    userCheck : (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT username, name FROM user WHERE username = ?',[data.username],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err))
            })
        })
    }
}