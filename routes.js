const express = require('express')

const SessionController = require('./src/controllers/SessionController')
const AccountController = require('./src/controllers/AccountController')
const CategoryController = require('./src/controllers/CategoryController')
const SubCategoryController = require('./src/controllers/SubCategoryController')
const TagController = require('./src/controllers/TagController')
const TransactionController = require('./src/controllers/TransactionController')
const AccountsTypeController = require('./src/controllers/AccountsTypeController')
const myJwt = require('./src/functions/jwt')

const routes = express.Router()

// Sessions routes
routes.get('/userData', myJwt.verifyJWT, SessionController.userData)
routes.post('/sessions', SessionController.store)
routes.post('/auth', SessionController.authentication)

// Accounts routes
routes.get('/accounts', myJwt.verifyJWT, AccountController.index)
routes.post('/accounts', myJwt.verifyJWT, AccountController.store)

// Categories routes
routes.get('/categories', myJwt.verifyJWT, CategoryController.index)
routes.post('/categories', myJwt.verifyJWT, CategoryController.store)
routes.put('/categories/:category_id', myJwt.verifyJWT, CategoryController.update)

// SubCategories routes
routes.get('/subcategories', myJwt.verifyJWT, SubCategoryController.index)
routes.post('/subcategories', myJwt.verifyJWT, SubCategoryController.store)

// Tags routes
routes.get('/tags', myJwt.verifyJWT, TagController.index)
routes.post('/tags', myJwt.verifyJWT, TagController.store)
routes.put('/tags/:tag_id', myJwt.verifyJWT, TagController.update)

// Transactios routes
routes.get('/transactions', myJwt.verifyJWT, TransactionController.index)
routes.post('/transactions', myJwt.verifyJWT, TransactionController.store)

// AccountsTypes routes
routes.get('/accountstypes', myJwt.verifyJWT, AccountsTypeController.index)
routes.post('/accountstypes', myJwt.verifyJWT, AccountsTypeController.store)

module.exports = routes