'use strict'


const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const ProductCtrl = require('./controllers/product')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})


app.get('/api/product', ProductCtrl.getProducts) 

app.get('/api/product/:productId',ProductCtrl.getProduct)

app.post('/api/product', ProductCtrl.saveProduct)

app.put('/api/product/:productId', ProductCtrl.putProduct)

app.delete('/api/product/:productId', ProductCtrl.deleteProduct)


module.exports =app