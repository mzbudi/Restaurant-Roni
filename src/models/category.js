const connection = require('../config/mysql');

module.exports = {
    getAllCategory : ()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM categories',(err,res)=>{
                if(!err){
                    resolve(res);
                }

                reject(new Error(err))
            })
        })
    },
    getCategory : (id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM categories WHERE category_id = ?', [id], (err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(new Error(err));
            })
        })
    },
    createCategory : (setData)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO categories SET ?',[setData],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                    reject(new Error(err));
            })
        })
    },
    updateCategory : (setData,id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE categories SET ? WHERE category_id = ? ',[setData,id],(err,res)=>{
                if(!err){
                    const newResult = {
                        id: id,
                        ...setData
                    }
                    resolve(newResult);
                }
                    reject(new Error(err));
            })
        })
    },
    deleteCategory : (id)=>{
        return result = new Promise((resolve,reject)=>{
            connection.query('DELETE FROM categories WHERE category_id = ?', [id], (err,res)=>{
                if(!err){
                    resolve(res)
                }
                reject(new Error(err))
            })
        })
    },

}