const {userLogin, createUser, userLoginKey, userCheck} = require('../models/auth')
const helper = require('../helper');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
module.exports = {
    userLogin : async (req,res)=>{
        try {
            const data = {
                username : req.body.username,
                password : req.body.password
            }
            let keyData = ''
            const resultLoginKey = await userLoginKey(data);
            keyData = String(resultLoginKey[0].p_key);
            console.log(keyData)

            var sha512 = function(password, salt){
                var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
                hash.update(password);
                var value = hash.digest('hex');
                return {
                    salt:salt,
                    passwordHash:value
                };
            };

            newPassword = sha512(data.password, keyData)
            console.log(newPassword);

            data.password = newPassword.passwordHash;
            console.log(data);

            const resultLogin = await userLogin(data);
            const token = jwt.sign({resultLogin},'zxc123',{expiresIn : '1h'})
            return helper.response(res,200,{token, userData : resultLogin});
        } catch (error) {
            return helper.response(res,400,{message : "Login Gagal"})
        }
    },
    createUser : async (req,res)=>{
        try {
            const data = {
                username : req.body.username,
                password : req.body.password,
                name : req.body.name
            }
            const result = await userCheck(data)
            if(result.length >= 1){
                return helper.response(res,200,{message : "Username Sudah Ada"})
            }else{
                let p_key = '';
                let pHash = '';
                var genRandomString = function(length){
                    return crypto.randomBytes(Math.ceil(length/2))
                            .toString('hex') /** convert to hexadecimal format */
                            .slice(0,length);  /** return required number of characters */
                };
    
                var sha512 = function(password, salt){
                    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
                    hash.update(password);
                    var value = hash.digest('hex');
                    return {
                        salt:salt,
                        passwordHash:value
                    };
                };
    
                    function saltHashPassword(userpassword) {
                        var salt = genRandomString(16); /** Gives us salt of length 16 */
                        var passwordData = sha512(userpassword, salt);
                        console.log('UserPassword = '+userpassword);
                        console.log('Passwordhash = '+passwordData.passwordHash);
                        p_key = passwordData.salt;
                        pHash = passwordData.passwordHash;
                    }

                saltHashPassword(req.body.password);
                data.password = pHash,
                data.p_key = p_key
                // console.log(data);
                const result = await createUser(data)
                return helper.response(res,200,{message:"Username Berhasil Dibuat"})
            };
        } catch (error) {
            return helper.response(res,200,result)
        }
    }
}