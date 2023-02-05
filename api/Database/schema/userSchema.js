const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, required: false
    },
    email: {
        type: String, unique: true, required: true
    },
    details: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'playerDetailSchema',
    },
    role: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userRole',
    },
    createdBy: {
        type: Date,
        default: Date.now(),
    },
    updatedBy: {
        type: Date,
        default: Date.now(),
    }
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
