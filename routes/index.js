var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.secure){
    console.log('Https');
  }else{
    console.log('Https');
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
