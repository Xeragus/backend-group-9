var express = require('express');
var router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

router
      .get('/', (req, res) => {
        res.render('index', { title: 'Express' });
      })
      .get('/add', (req, res) => {
        res.render('add');
      })
      .get('/login', (req, res) => {
        res.render('login')
      })
      .get('/register', (req, res) => {
        res.render('register')
      })
      .post('/register', async (req, res) => {
        const {first_name, last_name, email, password, confirm_password} = req.body

        try {
          if (!first_name || !last_name || !email || !password || !confirm_password) {
            throw new Error('Please fill in every field')
          }
          if (password != confirm_password) throw new Error('Passwords do not match')
          if (password.length < 6) throw new Error('Password should be at least 6 characters long')

          let user = await User.findOne({ email: email })
          if (user) throw new Error('Email is already registered')

          user = new User({ first_name, last_name, email, password })

          bcrypt.genSalt(10, (error, salt) => {
            if (error) throw error

            bcrypt.hash(user.password, salt, async (error, hash) => {
              if (error) throw error

              user.password = hash
              await user.save()
              res.redirect('/login')
            })
          })
        } catch (error) {
          console.log(error)
          res.render('register', { ...req.body, error: error.message })
        }
      })

module.exports = router;
