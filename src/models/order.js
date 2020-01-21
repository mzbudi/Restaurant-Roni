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
    addItemOrders : (order_id,orders)=>{
        return new Promise((resolve,reject)=>{
            orders.forEach(setData => {
                connection.query('INSERT INTO order_detail SET ?',[setData,order_id],(err,res)=>{
                    if(!err){
                        resolve({
                            message : "Pembelian Berhasil"
                        })
                    }
                    reject(new Error(err))
                })
            });
        })
    }
}