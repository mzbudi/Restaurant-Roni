const connection = require('../config/mysql');

module.exports = {
    userLogin : (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT user_id, username, name FROM user WHERE username = ? AND password = ?',[data.username, data.password],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err))
            })
        })
    },
    createUser : (setData)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO user SET ?',[setData], (err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err))
            })
        })
    }
}