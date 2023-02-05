const mongoose = require('mongoose')

const matchPointSchema = mongoose.Schema({
    points: {
        type: [
            {
                team: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'teamModel'
                },
                point: {
                    type: Number
                }
            }
        ],
    },
    pointUpdatedBy: {
        type: String
    },
    pointUpdatedAt: {
        type: Date,
        default: Date.now()
    },
})

const MatchPointModel = mongoose.model('matchPointModel', matchPointSchema)

module.exports = MatchPointModel
