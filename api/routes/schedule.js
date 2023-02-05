const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const { getScheduleDetails } = require('../handlers/scheduleHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const scheduleMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const scheduleRoute = () => {
    router.get('/', scheduleMiddleware, asyncHandler(getScheduleDetails))

    return router
}

module.exports = scheduleRoute
