var express = require('express');
var router = express.Router();

router
      .get('/', (req, res) => {
        res.render('index', { title: 'Express' });
      })
      .get('/add', (req, res) => {
        res.render('add');
      })

module.exports = router;
