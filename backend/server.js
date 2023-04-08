const express = require('express')
const routerUser = require('./routes/routeUser')
const routerGambar = require('./routes/routeGambar')


const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.use(routerUser)
app.use(routerGambar)



app.listen(port, 'localhost', () => {
    console.log(`server listened on http://localhost:${port}`)
})
