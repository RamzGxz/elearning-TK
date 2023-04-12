const express = require('express')
const routerBerita = express.Router()
const beritaControllers = require('../controllers/beritaControllers')


routerBerita.get('/getDataBerita', beritaControllers.getDataBerita)
routerBerita.get('/getBeritaById/:id', beritaControllers.getBeritaById)
routerBerita.post('/postDataBerita', beritaControllers.postDataBerita)
routerBerita.put('/updateBerita/:id', beritaControllers.updateBerita)
routerBerita.delete('/deleteBerita/:id', beritaControllers.deleteBerita)


module.exports = routerBerita