const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const { loginUser, registerUser } = require('../handlers/loginHandler')
const router = Router()
const isInRole = ['Player', 'SuperUser', 'Spectator']

const loginRoute = () => {
    router.post('/', asyncHandler(loginUser))
    router.post('/register', asyncHandler(registerUser))

    return router
}

module.exports = loginRoute
