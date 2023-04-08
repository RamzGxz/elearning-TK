const express = require('express')
const routerBerita = express.Router()
const beritaControllers = require('../controllers/beritaControllers')


routerBerita.get('/getDataBerita', beritaControllers.getDataBerita)
routerBerita.delete('/deleteBerita/:id', beritaControllers.deleteBerita)
routerBerita.put('/updateBerita/:id', beritaControllers.updateBerita)


module.exports = routerBerita