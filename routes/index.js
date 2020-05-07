var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  var ishttp = req.protocol;
  console.log(ishttp);
  res.render('index', { title: 'Express' });
    res.end();
});


router.get('/mail',(req,res)=>{

  async function mail(){

    let transporter = nodemailer.createTransport({
      host: 'sg3plvcpnl314452.prod.sin3.secureserver.net',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'support@triunionhealthcare.com',
        pass: '*Support123!'
      }
    });


    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "hsouleater@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });


    console.log("Message sent: %s", info.messageId);

  }
  mail().catch(console.error);

}); 

router.get('/sample',(req,res)=>{
  res.send('Sample Game');
  res.end();
});


module.exports = router;
