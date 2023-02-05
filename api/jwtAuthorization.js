const jwt = require('jsonwebtoken')
const { UserModel } = require('./database')

function jwtGeneration ({ userData }) {
    const accessToken = jwt.sign({...userData}, process.env.ACCESS_TOKEN_SECRETKEY, {expiresIn: '1h'})
    return accessToken
}

function authenticateToken(req, res, next) {
    authHeader = req.headers["authorization"]
    authToken = authHeader && authHeader.split(' ')[1]
    if (authToken === null) return res.sendStatus(401)
    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRETKEY, async (err, user) => {
        if(err) return res.status(403).send(err.message)
        const authorizedUser = await UserModel.findOne({ _id: user.user_id })
        if (!authorizedUser) return res.sendStatus(401)
        req.user = authorizedUser
        next()
    })
}

module.exports = { jwtGeneration, authenticateToken }
