require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const addAppRoutes = require('./addAppRoutes')
const connectDB = require('./connectDB')


app.use(cors())
app.use(bodyParser.json())

//app routes configured in here
addAppRoutes(app)

app.listen(process.env.PORT || 3001, () => {
   //DB connection
   connectDB(process.env.DATABASE_CONNECTION_STRING)
   console.log('server runs on 3005 port')
});
