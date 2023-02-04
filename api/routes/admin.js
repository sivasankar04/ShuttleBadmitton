const express = require('express');
const router=express.Router();

const adminRouter = () => {
    router.get('/',(req,res)=>{
        res.send('adminRoterValue')
    })

    return router
}

module.exports = adminRouter
