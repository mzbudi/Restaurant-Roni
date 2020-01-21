const helper = require('../helper/');
const {addOrder, addItemOrders} = require('../models/order');

module.exports = {
    addOrder : async (req,res)=>{
        try{
            const orders = req.body.orders;
            const user_id = req.body.user_id;
            let arr = []
            if(orders == undefined){
                return res.json({
                    message : "Data Tidak Boleh Kosong",
                })
            }
            orders.forEach(el => {
                arr.push(el.quantity)
            });
            if(orders.length < 0){
                return res.json({
                    message : "Data Tidak Boleh Kosong",
                })
            }
            let errorOrder = arr.filter(el=>parseInt(el)<=0);
                if(errorOrder.length > 0){
                    return res.json({message : 'Error Quantity'});
                }else{
                    const order_id = await addOrder(user_id,orders);
                    return helper.response(res,400,error)
                }
        }catch(error){
            throw error
        }
    },
    getOrder : async (req,res)=>{
        try {
            const result = await getOrder();
            return helper.response(res,200,result)
        } catch (error) {
            return helper.response(res,400,error)
        }
    }
}