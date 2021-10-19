const defaultRouter = require('./default')
const heroRouter = require('../routes/hero')

module.exports = function routes (app, express) {
    app.use('/', defaultRouter(express))
    app.use('/hero', heroRouter(express))
}