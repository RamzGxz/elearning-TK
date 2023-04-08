const express = require('express')
const vidoControllers = require('../controllers/videoController')
const routerVideo = express.Router()

routerVideo.get('/getVideo', vidoControllers.getDataVideo)

module.exports = routerVideo