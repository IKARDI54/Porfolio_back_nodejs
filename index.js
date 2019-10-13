'use strict'

const mongoose = require ('mongoose')
const app = require ('./app')
const port = process.env.PORT || 3001


mongoose.connect('mongodb://localhost:27017/shop',(err, res)=>{
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }else{
        console.log('Conexion a la base de datos establecida...')
        app.listen (port, function(){
            console.log(`corriendo en puerto http://localhost:${port}`)
        })
    }
})





