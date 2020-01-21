const connection = require('../config/mysql');

module.exports = {
    addOrder : (user_id,orders) => {
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO orders SET ?',{user_id:user_id},(err,res)=>{
                if(!err){
                    connection.query('SELECT * FROM orders ORDER BY order_id DESC LIMIT 1',(err,res)=>{
                        if(res.length >0){
                            const order_id = res[0].order_id
                            console.log(res[0].order_id);
                            console.log(orders)
                            orders.forEach(setData => {
                                console.log(setData)
                                connection.query(`INSERT INTO order_detail (order_id, product_id, quantity, product_price) VALUES (${order_id},${setData.product_id},${setData.quantity},${setData.product_price})`,(err,res)=>{
                                    if(!err){
                                        resolve({
                                            message : "Transaksi Berhasil"
                                        })
                                    }
                                    reject(new Error(err))
                                })
                            })
                        }
                    })
                }
            })
        })
    },
    getAllOrders : ()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT orders.order_id, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, orders.created_at FROM orders JOIN order_detail WHERE orders.order_id = order_detail.order_id ',(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getOrder : (order_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT orders.order_id, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, orders.created_at FROM orders JOIN order_detail WHERE orders.order_id=? and order_detail.order_id = ?',[order_id,order_id],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getOrderByDate : (date)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT orders.order_id, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, orders.created_at FROM orders JOIN order_detail WHERE orders.order_id=? and order_detail.order_id = ?',(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    }
}