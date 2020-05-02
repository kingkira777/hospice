var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.secure){
    res.redirect('https://dev.triunionhealthcare.com'+req.url);
    res.end();
  }else{
    res.render('index', { title: 'Express' });
  }
});

module.exports = router;
