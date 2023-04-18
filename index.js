const express=require('express');
require('dotenv').config();
const {dbConnection}=require('./database/config')
const cors = require('cors')



//Crear el servidor express
const app=express();

//Configurar Cors
app.use(cors());

//Base de datos
dbConnection();

// console.log(process.env);
//Rutas
app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg:'Hola mundo'
    }
    )
});



app.listen(process.env.PORT,() => {
    console.log('Servidor corriendo en puerto '+process.env.PORT);
});

//Password:
//ZendGbF6i0FxfGqL
//User:
//mean_user