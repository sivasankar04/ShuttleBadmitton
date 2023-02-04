const express = require('express');
const UserDetailModal = require('../Database/userDetails');
const userModal = require('../Database/userSchema')
const router = express.Router();

const userRouter = () => {
    router.post('/register', async (req, res) => {
        const users = await userModal.create(req.body)
        res.send({ data: users })
    })

    router.post('/addDetails', async (req, res) => {
        try {
            const userDetail = await UserDetailModal.create(req.body)
            const users = await userModal.findByIdAndUpdate({ _id: req.body.userId }, { details: userDetail._id })
            res.send({ data: users })

        } catch (err) {
        }
    })
    router.get('/getUsers', async (req, res) => {
        try {
            const users = await userModal.find().populate('details');
            res.send({ data: users })
        } catch (err) {
        }
    })

    return router
}


module.exports = userRouter;