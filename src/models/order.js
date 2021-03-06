const connection = require('../config/mysql');

module.exports = {
    addOrder : (user_id,orders,invoice_number,totalPrice,PPn) => {
        return new Promise((resolve,reject)=>{
            connection.query(`INSERT INTO orders (invoice_number, user_id, subTotal, PPn) VALUES (${invoice_number},${user_id},${totalPrice},${PPn})`,(err,res)=>{
                if(!err){
                    connection.query('SELECT * FROM orders ORDER BY order_id DESC LIMIT 1',(err,res)=>{
                        if(res.length >0){
                            const order_id = res[0].order_id
                            // console.log(res[0].order_id);
                            // console.log(orders)
                            orders.forEach(setData => {
                                // console.log(setData)
                                connection.query(`INSERT INTO order_detail (order_id, product_id, quantity, product_price, subTotal) VALUES (${order_id},${setData.product_id},${setData.quantity},${setData.product_price},${setData.totalPriceOfProduct})`,(err,res)=>{
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
            connection.query('SELECT orders.order_id, orders.invoice_number, orders.user_id, orders.PPn, orders.subTotal, orders.created_at FROM orders ORDER BY orders.created_at DESC LIMIT 999999 OFFSET 1',(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getOrder : (order_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT orders.order_id, orders.invoice_number, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, orders.created_at FROM orders JOIN order_detail WHERE orders.order_id=? and order_detail.order_id = ?',[order_id,order_id],(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getOrderByInvoice : (invoice_number)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT orders.order_id, orders.invoice_number, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, order_detail.subTotal, orders.created_at FROM orders JOIN order_detail WHERE orders.invoice_number = ${invoice_number} AND orders.order_id = order_detail.order_id`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getGrandTotalByInvoice : (invoice_number)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT subtotal,PPn from orders WHERE invoice_number = ${invoice_number}`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getGrandTotalById : (order_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT subtotal,PPn from orders WHERE order_id = ${order_id}`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    //Not yet
    getOrderByDate : (date)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT orders.order_id, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, orders.created_at FROM orders JOIN order_detail WHERE orders.order_id=? and order_detail.order_id = ?',(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getOrdersById : (id) =>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM orders WHERE orders.user_id = ${id} ORDER BY orders.order_id DESC`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err);
            })
        })
    },
    getDetailOrder : (id)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT orders.order_id, orders.invoice_number, orders.user_id, order_detail.product_id, order_detail.quantity, order_detail.product_price, order_detail.subTotal, orders.created_at FROM orders JOIN order_detail WHERE orders.order_id = ${id} AND orders.order_id = order_detail.order_id`,(err,res)=>{
                if(!err){
                    resolve(res);
                }
                reject(err)
            })
        })
    }
}