const routerUser = require('./routes/routeUser')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(routerUser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())


app.listen(port, 'localhost', ()=>{
    console.log(`server listened on http://localhost:${port}`)
})
