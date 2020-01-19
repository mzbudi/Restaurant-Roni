const connection = require('../config/mysql');
const fs = require('fs');

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
            connection.query('SELECT product_image FROM products WHERE product_id = ?', [id], (error,result)=>{
                if(result.length > 0){
                    const product_image = result[0].product_image;
                    if(product_image != ''){
                        fs.unlink(product_image, (error) => {
                            if (error) throw error;
                            console.log('file deleted');
                        });
                    }
                connection.query('DELETE FROM products WHERE product_id = ?', [id], (error,res)=>{
                    if(!error){
                        const newResult = {
                            product_id: id,
                            message : 'file Deleted'
                        }
                        resolve(newResult);
                    }
                        reject(new Error(error));
                    })
                }else{
                    reject(new Error(error));
                }
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
            connection.query('SELECT product_image FROM products WHERE product_id = ?', [id], (error,result)=>{
                if(result.length > 0){
                    const product_image = result[0].product_image;
                    if(product_image != ''){
                        fs.unlink(product_image, (error) => {
                            if (error) throw error;
                            console.log('file deleted');
                        });
                    }
                connection.query('UPDATE products SET ? WHERE product_id = ?', [setData,id], (error,res)=>{
                    if(!error){
                        const newResult = {
                            product_id: id,
                            ...setData
                        }
                        resolve(newResult);
                    }
                        reject(new Error(error));
                    })
                }else{
                    reject(new Error(error));
                }
        })
        })
    }
}