const express = require('express')
const mongoose = require('mongoose')
const server = require('./frameworks/webserver/server')
const expressConfig = require('./frameworks/webserver/express')
const mongoConnection = require('./frameworks/database/mongoDB/connection')
const routes = require('./frameworks/webserver/routes')
const config = require('./config/config')

const app = express()

//=====express configuration ========
expressConfig(express, app, config)

//=====server configuration and start ======
server(app, config).startServer()

//===== DB configuration and connection create =====
mongoConnection(mongoose, config, {
    autoIndex: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    keepAlive: 120,
    connectTimeoutMS: 1000
}).connectToMongo()

//===== App routes =========
routes(app, express)