const {
    getUser,
    updateUser,
    deleteUser
    } = require('../models/users');
const crypto = require('crypto');

const helper = require('../helper')

module.exports = {
    getUser : async (req,res)=>{
        try{
            const result = await getUser();
            return helper.response(res,200,result);
        }catch(error){
            return helper.response(res,400,result);
        }

    },
    deleteUser : async (req,res)=>{
        try {
            const id = req.params.user_id
            const result = await deleteUser(id);
            if(result < 1){
                return helper.response(res,400,{message: "Data Tidak Ada"});
            }else{
                return helper.response(res,200,result);
            }
        } catch (error) {
            return helper.response(res,400,result);
        }
    },
    updateUser : async (req,res)=>{
        try {
            const id = req.params.user_id
            const setData = {
                name: req.body.name,
                user_role : req.body.user_role,
                password : req.body.password
            }

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
                        p_key = passwordData.salt;
                        pHash = passwordData.passwordHash;
                    }

                saltHashPassword(req.body.password);
                setData.password = pHash
                setData.p_key = p_key
                const result = await updateUser(setData,id)
                console.log(setData)
                return helper.response(res,200,{message:"Data Berhasil Diubah"})
        } catch (error) {
            return helper.response(res,400,error);
        }
    }
}