const express = require('express')
const routerUser = express.Router()
const userController = require('../controllers/userController')

routerUser.get('/user', userController.getUser)
routerUser.post('/login', userController.loginValidate)
routerUser.post('/insertUser', userController.insert)

module.exports = routerUser