module.exports = {
    port: process.env.port || 9000,
    mongo: {
        uri: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-api'
    }
}