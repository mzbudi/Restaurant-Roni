const connection = require('../config/mysql');
const fs = require('fs');

module.exports={
    // getAll : (nameSearch,product_name,category_id,date,limit,page)=>{
    //     return new Promise((resolve,reject)=>{
    //         connection.query(`SELECT * FROM products WHERE product_name LIKE '%${nameSearch}%' ORDER BY ${product_name} ${category_id} ${date} product_id LIMIT ${limit} OFFSET ${page}`,(err,res)=>{
    //             if(!err){
    //                 resolve(res);
    //             }
    //             reject(new Error(err));
    //         })
    //     })
    // },
    getAll : ()=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM products`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    getAllData : (limit,page)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM products LIMIT ${limit} OFFSET ${page}`,(err,res)=>{
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
    },
    getSearchByName : (nameSearch,limit,page) =>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM products where product_name like '%${nameSearch}%' LIMIT ${limit} OFFSET ${page}`,(err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    },
    getSearchByNameAll : (nameSearch) =>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM products where product_name like '%${nameSearch}%'`,(err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    },
    sortFunction : (sorterName,limit,page,sorter)=>{
        return new Promise((resolve,reject)=>{
            console.log(`SELECT * FROM products Order by ${sorterName} ${sorter} LIMIT ${limit} OFFSET ${page} `)

            connection.query(`SELECT * FROM products Order by ${sorterName} ${sorter} LIMIT ${limit} OFFSET ${page} `,(err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    },
    sortFunctionAll : (sorterName)=>{
        return new Promise((resolve,reject)=>{
            console.log(`SELECT * FROM products Order by ${sorterName}`);
            connection.query(`SELECT * FROM products Order by ${sorterName}`,(err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    },
    getById : (product_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM products WHERE product_id = ${product_id}`, (err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    getSearchByCategoryId : (category_id,limit,page)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT products.product_name, products.product_description, products.product_image, products.product_price , categories.category_id, categories.category_name FROM products JOIN categories WHERE categories.category_id = ${category_id} AND products.category_id = ${category_id} LIMIT ${limit} OFFSET ${page}`,[category_id,category_id],(err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    },
    getSearchByCategoryIdAll : (category_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query("SELECT products.product_name, products.product_description, products.product_image, products.product_price , categories.category_id, categories.category_name FROM products JOIN categories WHERE categories.category_id = ? AND products.category_id = ?",[category_id,category_id],(err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    }
}