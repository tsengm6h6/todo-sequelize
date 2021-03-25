// 引用路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// Create
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {

})

// Read
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

// Update
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('edit', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router