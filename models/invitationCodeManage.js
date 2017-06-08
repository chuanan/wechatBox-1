/**
 * Created by hiibook on 2017/6/8.
 */
// 邀请码管理
// 获取邀请码
var mysqlPool = module.require("./mysqlPool.js");
// http://www.oschina.net/translate/node-mysql-tutorial?utm_source=tuicool&utm_medium=referral


module.exports ={
    
    getInvitationCode:function (callback) {
        callback&&callback("获取失败，正在开发此功能")
    },
}
