const express = require('express')

const SessionController = require('./src/controllers/SessionController')

const routes = express.Router()

routes.get('/sessions', SessionController.teste)
routes.post('/sessions', SessionController.store)

module.exports = routes