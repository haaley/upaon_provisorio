var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'halaylanderson2009@gmail.com',
    subject: 'Nova Mensagem de Upaon Solutions',
    text: `${req.body.name} telefone: ${req.body.phone} (${req.body.email}) mandou a mensagem: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
          console.log(error);
    }
    else {
          console.log(error);
          res.render('index');
    }
  });
});

module.exports = router;
