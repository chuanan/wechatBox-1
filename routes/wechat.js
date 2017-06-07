var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.send(req.query.echostr);
    console.log('get',req.query.echostr)
});
router.post('/', function(req, res, next) {

    res.send(req.body.echostr);
    console.log('post',req.body)
});

module.exports = router;
