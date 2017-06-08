var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(req.query.echostr);
});

router.post('/', function(req, res, next) {
    res.send(req.body.echostr);
});
router.post('/test', function(req, res, next) {
    console.log(req.body,"有新消息")
    res.send(req.body.echostr);
});

module.exports = router;
