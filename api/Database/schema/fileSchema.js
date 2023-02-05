const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    fileName: {
        type: String,
        unique: true,
        required: true,
    },
    fileType: {
        type: String,
    },
})

const FileModel = mongoose.model('fileModel', fileSchema)

module.exports = FileModel
