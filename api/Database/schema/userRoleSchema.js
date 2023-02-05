const mongoose = require('mongoose')

const userRoleSchema = mongoose.Schema({
    role: {
        type: String,
    }
})

const UserRoleModel = mongoose.model('userRole', userRoleSchema)

module.exports = UserRoleModel
