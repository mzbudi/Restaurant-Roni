const {
    getAllCategory,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory,
} = require('../models/category');
const helper = require('../helper')


module.exports = {
    getAllCategory : async (req,res)=>{
        try{
            const result = await getAllCategory();
            return helper.response(res,200,result);
        }catch(error){
            return helper.response(res,400,result);
        }

    },
    getCategory : async (req,res)=>{
        try {
            const id = req.params.category_id;
            const result = await getCategory(id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,result);
        }
    },
    deleteCategory :async (req,res)=>{
        try {
            const id = req.params.category_id;
            const result = await deleteCategory(id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,result);
        }
    } ,
    //disalahin ini
    updateCategory : async (req,res)=>{
        try {
            const setData = req.body;
            const id = req.params.category_id;
            console.log(setData, id);
            const result = await updateCategory(setData,id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,result);
        }
    },
    createCategory : async (req,res)=>{
        try {
            const setData = req.body;
            const result = await createCategory(setData);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,result);
        }
    }
    //
}