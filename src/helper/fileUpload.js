const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, './assets/images');
    },
    filename : function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileUpload = multer({
    storage : storage
})

module.exports = fileUpload;