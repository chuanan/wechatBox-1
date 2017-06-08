/**
 * Created by hiibook on 2017/6/8.
 */
    var wechatVerification = function (req, res,next) {
    var echostr, nonce, signature, timestamp;
    signature = req.query.signature;
    timestamp = req.query.timestamp;
    nonce = req.query.nonce;
    echostr = req.query.echostr;
    if(check(timestamp,nonce,signature,"weixin")){
        return res.send(echostr);
    }else{
        return res.end();
    }
};

function check(timestamp, nonce, signature ,token) {
    var currSign, tmp;
    tmp = [token, timestamp, nonce].sort().join("");
    currSign = crypto.createHash("sha1").update(tmp).digest("hex");
    return currSign === signature;
};
module.exports = wechatVerification;