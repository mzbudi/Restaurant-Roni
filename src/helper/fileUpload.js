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
    storage : storage,
    fileFilter: function (req,file,callback){
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.PNG' && ext !== '.JPEG' && ext !== '.JPG'){
            return callback(new Error('Only Image Are Allowed'))
        }
        callback(null,true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
})

module.exports = fileUpload;