const { Router } = require('express')
const asyncHandler = require('express-async-handler')
const { getUserDetails } = require('../handlers/userHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const userMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const userRoute = () => {
    router.post('/register', userMiddleware, asyncHandler(getUserDetails))
    router.post('/addDetails', userMiddleware, asyncHandler(getUserDetails))
    router.get('/getUsers', userMiddleware, asyncHandler(getUserDetails))

    return router
}

module.exports = userRoute;
