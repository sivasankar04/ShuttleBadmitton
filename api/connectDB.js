const mongoose = require('mongoose')

const connectDB = (connectionString) => {
    try {
        mongoose.connect(connectionString)
        console.log('DB connected')
    } catch(err) {
        console.log('Database Error:', err.message)
    }
}

module.exports = connectDB
