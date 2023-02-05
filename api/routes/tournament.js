const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const { getTournamentDetails } = require('../handlers/tournamentHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const tournamentMiddleware = (req, res, next) => {
    const { role } = req.body

    if (isInRole.includes(role)) {
        return;
    }

    next()
}

const tournamentRoute = () => {
    router.get('/',(req,res)=>{
        res.send('tournamentRouterValue', tournamentMiddleware, asyncHandler(getTournamentDetails))
    })

    return router
}

module.exports = tournamentRoute
