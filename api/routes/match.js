const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const { getMatchDetails } = require('../handlers/matchHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const matchMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const matchRoute = () => {
    router.get('/',(req,res)=>{
        res.send('matchRouterValue', matchMiddleware, asyncHandler(getMatchDetails))
    })

    return router
}

module.exports = matchRoute
