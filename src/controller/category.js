const {
    getAllCategory,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory,
} = require('../models/category');


module.exports = {
    getAllCategory : async (req,res)=>{
        try{
            const result = await getAllCategory();
            return res.json(result)
        }catch(error){
            return res.json(result);
        }

    },
    getCategory : async (req,res)=>{
        try {
            const id = req.params.category_id;
            const result = await getCategory(id);
            return res.json(result)
        } catch (error) {
            throw error
        }
    },
    deleteCategory :async (req,res)=>{
        try {
            const id = req.params.category_id;
            const result = await deleteCategory(id);
            return res.json(result);
        } catch (error) {
            throw error
        }
    } ,
    //disalahin ini
    updateCategory : async (req,res)=>{
        try {
            const setData = req.body;
            const id = req.params.category_id;
            console.log(setData, id);
            const result = await updateCategory(setData,id);
            res.json(result);
        } catch (error) {
            throw error
        }
    },
    createCategory : async (req,res)=>{
        try {
            const setData = req.body;
            const result = await createCategory(setData);
            return res.json(result);
        } catch (error) {
            throw error
        }
    }
    //
}