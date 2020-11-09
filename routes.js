const express = require('express')

const SessionController = require('./src/controllers/SessionController')
const AccountController = require('./src/controllers/AccountController')
const CategoryController = require('./src/controllers/CategoryController')
const SubCategoryController = require('./src/controllers/SubCategoryController')
const TagController = require('./src/controllers/TagController')

const routes = express.Router()

// Sessions routes
routes.post('/sessions', SessionController.store)

// Accounts routes
routes.get('/accounts', AccountController.index)
routes.post('/accounts', AccountController.store)

// Categories routes
routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.put('/categories/:category_id', CategoryController.update)

// SubCategories routes
routes.get('/subcategories', SubCategoryController.index)
routes.post('/subcategories', SubCategoryController.store)

// Tags routes
routes.get('/tags', TagController.index)
routes.post('/tags', TagController.store)
routes.put('/tags/:tag_id', TagController.update)

module.exports = routes