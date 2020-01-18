const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerNav = require('./src');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}))

const server = app.listen(3001,"127.0.0.1",function(){
    const host = server.address().address
    const port = server.address().port
    console.log("Listening on Host : ",host," Port : ",port);
    })

app.use('/',routerNav);
