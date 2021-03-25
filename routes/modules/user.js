// 引用路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const User = db.User
const bcrypt = require('bcryptjs')
const passport = require('passport')

// 認證相關路由
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password || !confirmPassword) {
    req.flash('error_msg', 'All fields are required.')
  }
  if (password !== confirmPassword) {
    req.flash('error_msg', 'Incorrect password or confirmPassword.')
  }
  const errorMsg = req.flash('error_msg')
  if (errorMsg.length) {
    return res.render('register', {
      name,
      email,
      password,
      confirmPassword,
      error_msg: errorMsg
    })
  }

  return User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        req.flash('error_msg', 'User already exists')
        const errorMsg = req.flash('error_msg')
        return res.render('register', {
          name,
          email,
          password,
          confirmPassword,
          error_msg: errorMsg
        })
      }
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({
          name,
          email,
          password: hash
        }))
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'Logout Successfully')
  res.redirect('/users/login')
})

module.exports = router