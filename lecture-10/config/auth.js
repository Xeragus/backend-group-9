module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) return next()

    res.redirect('/login')
  },
  redirectAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) res.redirect('/')

    return next()
  }
}