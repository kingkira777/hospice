var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ishttp = req.protocol;
  console.log(ishttp);
  // if(ishttp === "http"){
  //   res.redirect('https://dev.triunionhealthcare.com/');
  //   res.end();
  // }else{
    
  // }
  res.render('index', { title: 'Express' });
    res.end();
});

module.exports = router;
