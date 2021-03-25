// 引用路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const users = require('./modules/user')
const todos = require('./modules/todo')
const { authenticator } = require('../middleware/auth')

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router