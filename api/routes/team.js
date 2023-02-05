const { Router } = require('express');
const { getTeamDetails } = require('../handlers/teamHandler')
const asyncHandler = require('express-async-handler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const teamMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const teamRoute = () => {
    router.get('/', teamMiddleware, asyncHandler(getTeamDetails))

    return router
}

module.exports = teamRoute
