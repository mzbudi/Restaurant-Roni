const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'restaurant-roni',
})

connection.connect((error,res)=>{
    if(error){console.log('Database Belum Tekoneksi')
    }else{
        console.log("You are now Connected !");
    }

});

module.exports = connection;