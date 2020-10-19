var express = require('express');
var router = express.Router();
const realEstateProperties = require('../real-estate-data')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Real Estate Properties', realEstatePropertiesXYZ: realEstateProperties });
});


module.exports = router;
