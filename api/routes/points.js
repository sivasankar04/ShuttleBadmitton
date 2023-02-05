const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const { getPoints } = require('../handlers/pointHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const pointsMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const pointRoute = () => {
    router.get('/', pointsMiddleware, asyncHandler(getPoints))

    return router
}

module.exports = pointRoute
