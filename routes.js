const express = require('express')

const SessionController = require('./src/controllers/SessionController')
const AccountController = require('./src/controllers/AccountController')

const routes = express.Router()

// Sessions routes
routes.post('/sessions', SessionController.store)

// Accounts routes
routes.get('/accounts', AccountController.index)
routes.post('/accounts', AccountController.store)

module.exports = routes