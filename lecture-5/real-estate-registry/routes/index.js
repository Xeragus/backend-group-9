var express = require('express');
var router = express.Router();

router
  .get('/', (req, res) => {
    res.render('index', { title: 'Generacija 9', subtitle: 'hehehe hiuhiuhi' })
  })
  .get('/people', (req, res) => {
    res.render('people', { title: 'People', name: 'Boban Sugareski' })
  })

module.exports = router;
