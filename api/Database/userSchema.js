const mongoose = require('mongoose');
const UserDetailModal = require('./userDetails');

const userSchema = mongoose.Schema({
    // userName: { type: String, required: false },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    // details: { type: mongoose.Schema.Types.ObjectId, ref: 'userDetailSchema' }
});

const UserModal = mongoose.model('userSchema', userSchema);

module.exports = UserModal;
