const mongoose = require('mongoose');

const playerContactSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true,
    },
    secondaryEmail: {
        type: String,
    },
    city: {
        type: String,
    },
    availableForMatch: {
        type: Boolean,
    }

});

const PlayerContactModel = mongoose.model('playerContactModel', playerContactSchema);

module.exports = PlayerContactModel;
