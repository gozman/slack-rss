var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack to RSS by @gozmike', address: req.headers.host });
});

module.exports = router;
