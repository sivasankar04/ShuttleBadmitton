const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
    tournamentName: {
        type: String,
        required: true
    },
    tournamentSchedule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'scheduleModel',
    },
    pointsTable : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pointsTableModel',
    },
    numberOfTeams: {
        type: Number,
        required: true
    },
    RegisteredTeams: {
        type: [ 
            mongoose.Schema.Types.ObjectId,
        ],
        ref: 'teamsModel'
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
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

const tournamentModel = mongoose.model('tournamentModel', tournamentSchema);

module.exports = tournamentModel;
