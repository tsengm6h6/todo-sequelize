module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    // TODO: flash message
    console.log('Please login')
    res.redirect('/users/login')
  }
}
