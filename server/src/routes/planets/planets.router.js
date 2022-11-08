const express = require('express')
const planetsController = require('./planets.controller')

const planetsRouter = express.Router()

const {
    httpGetAllPlanets
} = require('./planets.controller')

planetsRouter.get('/', httpGetAllPlanets)

module.exports = planetsRouter