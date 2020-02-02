const {
    getUser
    } = require('../models/users');

const helper = require('../helper')

module.exports = {
    getUser : async (req,res)=>{
        try{
            const result = await getUser();
            return helper.response(res,200,result);
        }catch(error){
            // return helper.response(res,400,result);
            throw error
        }

    },
}