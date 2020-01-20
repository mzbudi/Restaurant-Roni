const helper = require('../helper/');
// const {addOrder} = require('../models/order');

module.exports = {
    addOrder : async (req,res)=>{
        const jsonBody = req.body.orders;
        const asd = JSON.stringify(jsonBody);
        console.log(asd)
        return res.json(jsonBody)
    }
}