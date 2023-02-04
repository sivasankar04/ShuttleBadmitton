const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userModal = require('./Database/userSchema')
const cors = require('cors');
const app = express();
const addAppRoutes = require('./addAppRoutes')


app.use(cors())
app.use(bodyParser.json())

addAppRoutes(app)

app.listen(3005, () => { 
   console.log('server runs on 3005 port')
   mongoose.connect("mongodb://localhost:27017/samplecollection")
   console.log('DB connected')
});
