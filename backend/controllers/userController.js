const userModels = require('../models/userModels')

module.exports = {
    getUser: async (req, res) => {
        try {
            const data = await userModels.find()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    },
    loginValidate: async (req, res) => {
        const username = req.body.username
        const password = req.body.password
        try {
            const data = await userModels.find({username: username, password: password})
            if(data.length === 1){
                req.session.isAuthenticated = true
                res.status(200).json({
                    message: 'data ditemukan, login succes',
                    data: data
                })
                console.log(req.session.isAuthenticated)
            } else {
                res.status(404).json({
                    message: 'data tidak ditemukan'
                })
            }
        } catch (error) {
            req.status(500).send(error)
            console.log(error)
        }
    },
    insert: async (req, res) => {
        const data = new userModels({
            username: req.body.username,
            password: req.body.password
        })
        try {
            const savedData = await data.save()
            res.json(savedData)
        } catch (error) {
            console.log(error)
        }
    }, 
    logout: (req, res) =>{
        req.session.destroy((err)=>{
            if(err){
                res.json({
                    message: err
                })
            } else{
                res.json({
                    message:'logout succes!!'
                })
            }
        })
    }
}