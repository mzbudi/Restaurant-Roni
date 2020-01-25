const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
})

connection.connect((error,res)=>{
    if(error){console.log('Database Belum Tekoneksi')
    }else{
        console.log("You are now Connected !");
    }

});

module.exports = connection;