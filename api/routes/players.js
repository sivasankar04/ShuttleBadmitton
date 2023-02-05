const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const { getPlayerDetails } = require('../handlers/playerHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const playerMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const playerRoute = () => {
    router.get('/', playerMiddleware, asyncHandler(getPlayerDetails))

    return router
}

module.exports = playerRoute
