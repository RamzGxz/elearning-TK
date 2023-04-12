const express = require('express')
const vidoControllers = require('../controllers/videoController')
const routerVideo = express.Router()

routerVideo.get('/getVideo', vidoControllers.getDataVideo)
routerVideo.get('/getVideoById/:id', vidoControllers.getVideoById)
routerVideo.get('/getVideoByCategory', vidoControllers.getVideoByCategory)
routerVideo.post('/postDataVideo', vidoControllers.postDataVideo)
routerVideo.put('/updateVideo/:id', vidoControllers.updateVideo)
routerVideo.delete('/deleteVideo/:id', vidoControllers.deleteVideo)



module.exports = routerVideo