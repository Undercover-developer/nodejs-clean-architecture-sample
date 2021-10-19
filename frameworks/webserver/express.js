const express = require('express')
const expressHandlebars = require('express-handlebars')
const path = require('path')
const logger = require('morgan')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const cookie = require('cookie-parser')
const mongoStore = require('connect-mongo')

module.exports = function expressConfig(express, app, config) {

    //=========body-parser ============
    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))

    //======== setting up View Engine ==========
    app.engine(".hbs", expressHandlebars({
        defaultLayout: "layout",
        extname: ".hbs",
        // helpers: helpers
    }))
    app.set("view engine", ".hbs")

    //======setting up session=========
    app.use(cookie())
    app.use(
        session({
            store: mongoStore.create({
                mongoUrl: config.mongo.uri
            }),
            secret:
                "ikdssndkjsdfjosjeijoiIIIJAoIJAOIoSOIJOSMpIOI09JIOSJ0D9JSNJNoijJNSONIjnocjPOJE9ew",
            saveUninitialized: true,
            resave: true,
            cookie: { maxAge: 3600000 } //1 Hour Expiration
        })
    )
    
    //======setting up connect-flash=========
    app.use(flash())
    app.use((req, res, next) => {
        res.locals.success_message = req.flash("success-message")
        res.locals.error_message = req.flash("error-message")
        res.locals.messages = require('express-messages')
        res.locals.session = req.session

        next()
    })

    //========== setting static folders =========
    app.use(express.static(path.join(__dirname, "public")))
    app.use(express.static('./'))

    //====Logger====
    app.use(logger('dev'))
}