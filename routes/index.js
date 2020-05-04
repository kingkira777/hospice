var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ishttp = req.protocol;
  if(ishttp === "http"){
    res.redirect('https://dev.triunionhealthcare.com/');
    res.end();
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
