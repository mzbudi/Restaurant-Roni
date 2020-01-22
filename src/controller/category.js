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
            return helper.response(res,400,{message : "Data Tidak Boleh Kosong"});
        }
    } ,
    updateCategory : async (req,res)=>{
        try {
            const setData = req.body;
            const id = req.params.category_id;
            if(setData.category_name == ''|| setData.category_name == undefined){
                return helper.response(res,400,{message: "Data Tidak Boleh Kosong"});
            }
            // console.log(setData, id);
            const result = await updateCategory(setData,id);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,result);
        }
    },
    createCategory : async (req,res)=>{
        try {
            const setData = req.body;
            if(setData.category_name == ''|| setData.category_name == undefined){
                return helper.response(res,400,{message: "Data Tidak Boleh Kosong"});
            }
            const result = await createCategory(setData);
            return helper.response(res,200,result);
        } catch (error) {
            return helper.response(res,400,{message: "Terjadi Kesalahan"});
        }
    }
    //
}