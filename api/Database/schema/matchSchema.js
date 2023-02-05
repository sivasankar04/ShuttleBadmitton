const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
    matchRefree: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
    },
    teams: {
        type: [
            mongoose.Schema.Types.ObjectId
        ],
        ref: 'teamModel',
        required: true,
    },
    matchPoints: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'matchPointModel',
    },
    scheduledAt: {
        type: Date,
    },
    matchCreatedBy: {
        type: String
    },
    matchCreatedAt: {
        type: Date,
        default: Date.now()
    }
})

const MatchModel = mongoose.model('matchModel', matchSchema)

module.exports = MatchModel
