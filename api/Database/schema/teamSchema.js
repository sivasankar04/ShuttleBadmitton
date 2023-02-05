const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true,
    },
    players: {
        type: [
            mongoose.Schema.Types.ObjectId,
        ],
        ref: 'user',
        required: true,
    },
    captainDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    matchesPlayed: {
        type: Number
    },
    matchesWon: {
        type: Number
    },
    teamCreatedBy: {
        type: String
    },
    teamCreatedAt: {
        type: Date,
        default: Date.now(),
    },
    teamUpdatedBy: {
        type: Date,
    },
    teamLogo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fileModel',
    }
})

const TeamModel = mongoose.model('teamModel', teamSchema)

module.exports = TeamModel
