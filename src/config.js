require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 5000,
        mongouri: process.env.MONGO_URI
    }
}