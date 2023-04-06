const routerUser = require('./routes/routeUser')
const express = require('express')
const app = express()
const port = 3000
app.use(routerUser)
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(port)
