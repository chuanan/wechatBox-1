/**
 * Created by hiibook on 2017/6/8.
 */
var invitationCodeManage = require("./invitationCodeManage");


var MessageProcessing = function (req, res, next) {
    var _da;
    req.on("data", function (data) {
        /*微信服务器传过来的是xml格式的，是buffer类型，因为js本身只有字符串数据类型，所以需要通过toString把xml转换为字符串*/
        _da = data.toString("utf-8");

    });
    req.on("end", function () {
        //console.log("end");
        var ToUserName = getXMLNodeValue('ToUserName', _da);
        var FromUserName = getXMLNodeValue('FromUserName', _da);
        var CreateTime = getXMLNodeValue('CreateTime', _da);
        var MsgType = getXMLNodeValue('MsgType', _da);
        var Content = getXMLNodeValue('Content', _da);
        var MsgId = getXMLNodeValue('MsgId', _da);
        //完成回掉函数
        function complete(message) {
            var xml = '<xml><ToUserName>' + FromUserName + '</ToUserName><FromUserName>' + ToUserName + '</FromUserName><CreateTime>' + CreateTime + '</CreateTime><MsgType>' + MsgType + '</MsgType><Content>' + message + '</Content></xml>';
            res.send(xml);
        }

            switch (Content) {
                case  "<![CDATA[邀请码]]>"||"<![CDATA[注册码]]>":
                    invitationCodeManage.getInvitationCode(complete);
                    break;
                case  "<![CDATA[帮助]]>":
                    var help = "正在开发帮助模块，请等待开发完成";
                    var xml = '<xml><ToUserName>' + FromUserName + '</ToUserName><FromUserName>' + ToUserName + '</FromUserName><CreateTime>' + CreateTime + '</CreateTime><MsgType>' + MsgType + '</MsgType><Content>' + help + '</Content></xml>';
                    res.send(xml);
                    break;
                case  "<![CDATA[签到]]>":
                    var checkIn = "正在开发签到模块，请等待开发完成";
                    var xml = '<xml><ToUserName>' + FromUserName + '</ToUserName><FromUserName>' + ToUserName + '</FromUserName><CreateTime>' + CreateTime + '</CreateTime><MsgType>' + MsgType + '</MsgType><Content>' + checkIn + '</Content></xml>';
                    res.send(xml);
                    break;
                default:
                    var other = "请尝试发送 帮助 来获取使用说明"
                    var xml = '<xml><ToUserName>' + FromUserName + '</ToUserName><FromUserName>' + ToUserName + '</FromUserName><CreateTime>' + CreateTime + '</CreateTime><MsgType>' + MsgType + '</MsgType><Content>' + other + '</Content></xml>';
                    res.send(xml);
            }




    });
};

function getXMLNodeValue(node_name, xml) {
    var tmp = xml.split("<" + node_name + ">");
    var _tmp = tmp[1].split("</" + node_name + ">");
    return _tmp[0];
}
module.exports = MessageProcessing;