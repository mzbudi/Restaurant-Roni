const helper = require('../helper/');
const {addOrder, addItemOrders, getOrder, getAllOrders} = require('../models/order');

module.exports = {
    addOrder : async (req,res)=>{
        try{
            const orders = req.body.orders;
            const user_id = req.body.user_id;
            let arrQty = [];
            let arrPrice = [];
            let totalPriceOfProduct = [];
            let totalPrice = 0;
            let invoice_number = Math.round(Math.random() * 999999);
            let PPn = 0;
            if(orders == undefined){
                return res.json({
                    message : "Data Tidak Boleh Kosong",
                })
            }
            if(orders.length < 0){
                return res.json({
                    message : "Data Tidak Boleh Kosong",
                })
            }
            orders.forEach(order => {
                arrQty.push(order.quantity);
                arrPrice.push(order.product_price)
            });
            for(let i=0; i< arrQty.length; i++) {
                totalPrice += arrQty[i]*arrPrice[i];
                totalPriceOfProduct.push(arrQty[i]*arrPrice[i])
            }
            orders.forEach((order, index )=> {
                order.totalPriceOfProduct = totalPriceOfProduct[index]
            })
            let errorOrder = arrQty.filter(qty=>parseInt(qty)<=0);
                if(errorOrder.length > 0){
                    return res.json({message : 'Error Quantity'});
                }else{
                    // return res.json({
                    //     orders : orders,
                    //     totalPrice : totalPrice,
                    //     invoice_number: invoice_number,
                    //     PPn : 0.10*totalPrice
                    // })
                    PPn = 0.10*totalPrice;
                    const result = await addOrder(user_id,orders,invoice_number,totalPrice,PPn);
                    return helper.response(res,200,result)
                }
        }catch(error){
            // return helper.response(res,400,error);
            throw error
        }
    },
    getOrder : async (req,res)=>{
        try {
            const order_id = req.params.order_id
            const result = await getOrder(order_id);
            return helper.response(res,200,result)
        } catch (error) {
            throw error
            // return helper.response(res,400,error)
        }
    },
    getAllOrders : async (req,res) =>{
        try {
            const result = await getAllOrders()
            return helper.response(res,200,result);
        } catch (error) {
            throw error
            // return helper.response(res,400,error)
        }
    }
}