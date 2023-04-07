const express = require('express')
const routerGambar = express.Router()
const gambarController = require('../controllers/gambarControllers')

routerGambar.get('/getGambar', gambarController.getDataGambar)
routerGambar.delete('/deleteGambar/:id', gambarController.delDataGambar)
routerGambar.get('/updateGambar/:id', gambarController.updateGambar)

module.exports = routerGambar