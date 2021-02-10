var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function (req, res) {
  res.render('main', { user: req.user });
});

module.exports = router;
