/**
 * Created by hiibook on 2017/6/8.
 */
// 接口内容:
// 绑定
// 修改绑定
var mysqlPool = module.require("./mysqlPool.js");
// http://www.oschina.net/translate/node-mysql-tutorial?utm_source=tuicool&utm_medium=referral
mysqlPool.getConnection(function (err, connection) {
    if (err) {
        return err
    } else {

        // 使用连接
        connection.query('SELECT something FROM sometable', function (err, rows) {
            // 使用连接执行查询


            connection.release();
            //连接不再使用，返回到连接池
        })
    }
}




