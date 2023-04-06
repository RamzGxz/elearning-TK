const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.redirect('http://localhost:5173/admin/upload'))

app.listen(port)
