var express = require('express');
var router = express.Router();
var wechatVerification = require('../models/wechatVerification.js');
var MessageProcessing = require('../models/MessageProcessing.js');

/* GET home page. */
router.get('/',wechatVerification);

router.post('/', MessageProcessing);


module.exports = router;
