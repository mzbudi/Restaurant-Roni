const jwt = require('jsonwebtoken');
const helper = require('../helper/');

module.exports = {
    authorization : (req,res,next)=>{
        const token = req.headers.authorization
        jwt.verify(token,'zxc123',(error,result)=>{
            if(error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError"){
                const result = {message : error.message}
                return helper.response(res, 403, result);
            }else{
                req.token = result;
                next()
            }
        })
    }
}