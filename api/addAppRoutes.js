const { loginRoute, userRoute, playerRoute, teamRoute, tournamentRoute, scheduleRoute, matchRoute, pointRoute } = require('./routes')
const { authenticateToken } = require('./jwtAuthorization')

const addAppRoutes = (app) => {
    app.use('/login', loginRoute())
    app.use('/user', authenticateToken, userRoute())
    app.use('/player', authenticateToken, playerRoute())
    app.use('/match', authenticateToken, matchRoute())
    app.use('/tournament', authenticateToken, tournamentRoute())
    app.use('/schedule', authenticateToken, scheduleRoute())
    app.use('/point', authenticateToken, pointRoute())
    app.use('/team', authenticateToken, teamRoute())

    return app
}

module.exports = addAppRoutes
