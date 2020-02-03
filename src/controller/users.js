const {
    getUser,
    updateUser,
    deleteUser
    } = require('../models/users');

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
                user_role : req.body.user_role
            }
            const result = await updateUser(setData,id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,result);
        }
    }
}