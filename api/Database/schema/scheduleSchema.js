const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
    numberOfMatches: {
        type: Number,
        required: true
    },
    matches: {
        type: [
            mongoose.Schema.Types.ObjectId,
        ],
        ref: 'matchModel'
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

const scheduleModel = mongoose.model('scheduleModel', scheduleSchema);

module.exports = scheduleModel;
