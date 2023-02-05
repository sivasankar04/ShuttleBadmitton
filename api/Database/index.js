const UserModel = require('./schema/userSchema')
const UserDetailsModel = require('./schema/playerDetailSchema')
const UserRoleModel = require('./schema/userRoleSchema')
const FileModel = require('./schema/fileSchema')
const PlayersDetailModel = require('./schema/playerDetailSchema')
const PlayerContactModel = require('./schema/playerContactDetails')
const TournamentModel = require('./schema/tournamentSchema')
const TeamModel = require('./schema/teamSchema')
const ScheduleModel = require('./schema/scheduleSchema')
const MatchModel = require('./schema/matchSchema')
const MatchPointModel = require('./schema/matchPointSchema')
const PointsTableModel = require('./schema/pointsTableSchema')

module.exports = {
    UserModel,
    UserDetailsModel,
    UserRoleModel,
    FileModel,
    PlayersDetailModel,
    PlayerContactModel,
    TournamentModel,
    TeamModel,
    ScheduleModel,
    MatchModel,
    MatchPointModel,
    PointsTableModel

}