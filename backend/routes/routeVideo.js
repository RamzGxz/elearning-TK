const express = require('express')
const vidoControllers = require('../controllers/videoController')
const routerVideo = express.Router()

routerVideo.get('/getVideo', vidoControllers.getDataVideo)
routerVideo.delete('/deleteVideo/:id', vidoControllers.deleteVideo)
routerVideo.put('/updateVideo/:id', vidoControllers.updateVideo)
routerVideo.post('/postDataVideo', vidoControllers.postDataVideo)


module.exports = routerVideo