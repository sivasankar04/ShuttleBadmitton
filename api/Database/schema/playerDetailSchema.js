const mongoose = require('mongoose');

const playerDetailSchema = mongoose.Schema({
    joinningDate: {
        type: Date,
        required: true,
    },
    hobbies: {
        type: String,
    },
    currentTeam: {
        type: String,
    },
    achivements: {
        type: String,
    },
    matchesPlayed: {
        type: Number,
    },
    matchesWon: {
        type: Number,
    },
    previousTeams: {
        type: Array,
    },
    profilePhoto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fileModel'
    },
    playerContactDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'playerContactModel'
    }
});

const PlayersDetailModel = mongoose.model('playersDetailSchema', playerDetailSchema);

module.exports = PlayersDetailModel;
