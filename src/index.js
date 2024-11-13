const express = require("express");
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const config = require('./config');

const index = express();


//settear puerto, tipo de vistas y ubicacion de estas 
index.set('port',config.app.port);
index.set('view engine', 'ejs');
index.set('views',path.join(__dirname,'views'));

//middlewares
index.use(myConnection(mysql,{
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
},'single'))








index.listen(index.get('port'),()=>{
    console.log('Conexion exitosa en el puerto',index.get('port'));
    console.log('http://localhost:' + index.get('port')+'/login');
})