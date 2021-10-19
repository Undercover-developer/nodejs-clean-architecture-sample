
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: String,
    powers: String,
    color: String,
    sideKick: String,
    rank: String
})

module.exports = mongoose.model('Hero', HeroSchema )