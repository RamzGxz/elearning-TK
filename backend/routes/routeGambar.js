const express = require('express')
const routerGambar = express.Router()
const gambarController = require('../controllers/gambarControllers')

routerGambar.get('/getGambar', gambarController.getDataGambar)
routerGambar.delete('/deleteGambar/:_id', gambarController.delDataGambar)
routerGambar.put('/updateGambar/:_id', gambarController.updateGambar)
routerGambar.post('/postDataGambar', gambarController.postDataGambar)
routerGambar.post('/postGambarDetail/:_id', gambarController.insertdetail)
routerGambar.put('/updateGambarDetails/:_id', gambarController.updateDetail)

module.exports = routerGambar