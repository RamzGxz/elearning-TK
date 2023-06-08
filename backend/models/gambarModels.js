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
})

module.exports = mongoose.model('Gambar', gambarSchema, 'gambar')