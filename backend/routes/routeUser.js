const express = require('express')
const routerUser = express.Router()
const conn = require('../db/db')

routerUser.get('/user',(req, res)=>{
    conn.query('select * from user',(err,data)=>{
        if (err) throw err
        res.send(data)
    })
})

module.exports = routerUser