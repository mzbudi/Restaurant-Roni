const connection = require('../config/mysql');

module.exports={
    getAll : ()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * from products',(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    deleteProduct : (id)=>{
        return new Promise((resolve,reject)=>{
            // console.log(id);
            connection.query('DELETE FROM products WHERE product_id = ?', [id], (err,res)=>{
                if(!err){
                    resolve(res);
                }
                    reject(new Error(err));
            })
        })
    },
    createProduct : (setData)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO products SET ? ', setData , (err,res)=>{
                if(!err){
                    resolve(res);
                }
                    reject(new Error(err));
            })
        })
    },
    updateProduct : (setData,id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE products SET ? where product_id=?',[setData,id],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                    reject(new Error(err));
            })
        })
    }
}