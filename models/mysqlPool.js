/**
 * Created by hiibook on 2017/6/8.
 */
//mysql连接池
// http://www.oschina.net/translate/node-mysql-tutorial?utm_source=tuicool&utm_medium=referral

const config=  module.require("../config/config.js");//加载配置
var mysql = require('mysql');//加载mysql驱动

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : config.mysql.host,
    user            : config.mysql.user,
    password        : config.mysql.password,
    database        :  config.mysql.database
});
module.exports = pool;




// sql语句:
// 更新openid:UPDATE `user` SET `wechat_open_id` = 'obXt40nSSLPq6fyawVokJU_SJS9A' WHERE `user`.`id` = 1;
// 更新流量:UPDATE `user` SET `transfer_enable` = '538042171393' WHERE `user`.`id` = 1;