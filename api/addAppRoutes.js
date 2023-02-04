const userRouter = require('./routes/users')
const adminRouter = require('./routes/admin')

const addAppRoutes = (app) => {
    
    app.use('/users', userRouter())
    app.use('/admin', adminRouter())

    return app
}

module.exports = addAppRoutes
