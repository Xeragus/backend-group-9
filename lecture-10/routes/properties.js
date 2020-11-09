var express = require('express');
var router = express.Router();
const Property = require('../models/Property');
const PropertyType = require('../models/PropertyType');

router
      .get('/', async (req, res) => {
            const properties = await Property.find({ user: req.user })

            res.render('properties', { properties: properties, user: req.user })
      })
      .post('/', async (req, res) => {
            try {
                  // req.user = tekovno logiran korisnik
                  const property = new Property({
                        user: req.user,
                        ...req.body
                  })
                  await property.save()
                  res.redirect('/')
            } catch (err) {
                  const propertyTypes = await PropertyType.find()
                  res.render('add', { ...req.body, error: err.message, propertyTypes: propertyTypes })
            }
      })

module.exports = router;
