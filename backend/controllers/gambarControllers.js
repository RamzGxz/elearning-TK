const gambarModels = require('../models/gambarModels')

module.exports = {
    getDataGambar: async (req, res) => {
        try {
            const data = await gambarModels.find()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },
    delDataGambar: async (req, res) => {
        try {
            const deletedData = await gambarModels.deleteOne({ _id: req.params._id })
            res.json({
                message: 'delete succes',
                deletedData: deletedData
            })
        } catch (error) {
            console.log(error)
        }
    },
    updateGambar: async (req, res) => {
        const _id = req.params._id
        const filter = {_id: _id}
        const query = {
            $set:{
                link: req.body.link,
                description: req.body.description,
                category: req.body.category
            }
        }
        try {
            const dataUpdated = await gambarModels.updateOne(filter, query)
            if(dataUpdated && dataUpdated.matchedCount === 1){
                res.status(200).json({
                    message: 'data has been updated',
                    systemMessage: dataUpdated
                })
            } else if (dataUpdated && dataUpdated.matchedCount === 0){
                res.status(404).json({
                    message: 'data not found!'
                })
            }
        } catch (error) {
            res.status(500).json({
                message: 'internal server error'
            })
            console.log(error)
        }
    },
    postDataGambar: async (req, res) => {
        const data = new gambarModels({
            link: req.body.link,
            description: req.body.description,
            category: req.body.category
        })
        try {
            const savedData = data.save()
            res.status(200).json({
                message: 'succes Added Data'
            })
        } catch (error) {
            console.log(error)
        }
    },
    insertDetail: async()=>{
        const filter = {_id:req.params._id}
        const data = {
            $set:{
                'detail':{
                    'detail.tanggal' : req.body.tanggal,
                    'detail.source': req.body.source,
                    'detail.place': req.body.place
                }
            }

        }
        try{
            const response = await gambarModels.updateOne(filter,data)
            if (response.matchedCount == 1){
                res.json({
                    message:'data berhasil di tambah'
                })
            } else {
                res.json({
                    message:'ada kesalahan saat penambahan data '
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}