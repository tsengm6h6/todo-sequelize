// 引用路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const users = require('./modules/user')
const todos = require('./modules/todo')

router.use('/todos', todos)
router.use('/users', users)
router.use('/', home)

module.exports = router