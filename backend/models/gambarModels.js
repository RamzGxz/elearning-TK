const mongoose = require('mongoose')

const gambarSchema = new mongoose.Schema({
    link: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    detail:{
        tanggal :{
            required:false,
            type:String
        },
        source:{
            required :false,
            type:String
        },
        place :{
            required:false,
            type:String
        }
    }
})

module.exports = mongoose.model('Gambar', gambarSchema, 'gambar')