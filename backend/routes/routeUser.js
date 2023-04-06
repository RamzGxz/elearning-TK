const express = require('express')
const routerUser = express.Router()
const userController = require('../controllers/userController')

routerUser.get('/user', userController.getUser)
routerUser.get('/user/:id', userController.getUserById)
routerUser.post('/login', userController.login)

module.exports = routerUser