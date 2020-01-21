const {userLogin, createUser} = require('../models/auth')
const helper = require('../helper');

module.exports = {
    userLogin : async (req,res)=>{
        try {
            const data = {
                username : req.body.username,
                password : req.body.password
            }
            const result = await userLogin(data)
            return helper.response(res,200,result)
        } catch (error) {
            // return helper.response(res,200,result)
            throw error;
        }
    },
    createUser : async (req,res)=>{
        try {
            const data = {
                username : req.body.username,
                password : req.body.password,
                name : req.body.name
            }
            const result = await createUser(data)
            return helper.response(res,200,result)
        } catch (error) {
            throw error;
            // return helper.response(res,200,result)
        }
    }
}