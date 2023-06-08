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
    getUserById: (req, res) => {

    },
    loginValidate: async (req, res) => {
        const username = req.body.username
        const password = req.body.password
        try {
            const data = await userModels.find({username: username, password: password})
            if(data.length > 0){
                res.status(200).send('data ditemukan')
            } else{
                res.status(404).send('data tidak ditemukan')
            }
        } catch (error) {
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
    }
}