const mongoose = require('mongoose');

const pointsTableSchema = mongoose.Schema({
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

const PointsTableModel = mongoose.model('pointsTableModel', pointsTableSchema);

module.exports = PointsTableModel;
