const express = require('express')
const routerUser = express.Router()
const userController = require('../controllers/userController')


routerUser.get('/user', userController.getUser)
routerUser.post('/log', userController.loginValidate)
routerUser.post('/logout', userController.logout)

module.exports = routerUser