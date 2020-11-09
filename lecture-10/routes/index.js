var express = require('express');
var router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')
const { ensureAuthenticated, redirectAuthenticated } = require('../config/auth')
const PropertyType = require('../models/PropertyType')
const Property = require('../models/Property')

router
      .get('/', ensureAuthenticated, async (req, res) => {
        const properties = await Property.find().populate('user').populate('property_type')
        console.log(properties)
        res.render('index', { user: req.user, properties: properties })
      })
      .get('/add', ensureAuthenticated, async (req, res) => {
        const propertyTypes = await PropertyType.find()
        res.render('add', { user: req.user, propertyTypes: propertyTypes })
      })
      .get('/login', redirectAuthenticated, (req, res) => {
        res.render('login')
      })
      .get('/register', redirectAuthenticated, (req, res) => {
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
              req.flash('success_message', 'You are now registered. Please log in.')
              res.redirect('/login')
            })
          })
        } catch (error) {
          console.log(error)
          res.render('register', { ...req.body, error: error.message })
        }
      })
      .post('/login', (req, res, next) => {
        passport.authenticate('local', {
          successRedirect: '/',
          failureRedirect: '/login',
          failureFlash: true
        })(req, res, next)
      })
      .get('/logout', (req, res) => {
        req.logout()
        req.flash('success_message', 'You are logged out')
        res.redirect('/login')
      })
module.exports = router;
