const express = require('express')
const routerGambar = express.Router()
const gambarController = require('../controllers/gambarControllers')

routerGambar.get('/getGambar', gambarController.getDataGambar)
routerGambar.delete('/deleteGambar/:id', gambarController.delDataGambar)
routerGambar.put('/updateGambar/:id', gambarController.updateGambar)
routerGambar.get('/getGambarById/:id', gambarController.getDataGambarId)
routerGambar.post('/postDataGambar', gambarController.postDataGambar)

module.exports = routerGambar