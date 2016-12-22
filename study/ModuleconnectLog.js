/**
 * Created by Administrator on 2016-08-15. connect 中间件 面向切面
 */
var connect = require('connect');

var app = connect()
// log模块需要单独npm下载。和原来的用法有区别，名称非logger
var Log = require("morgan")
app.use(Log())
    .use(function (req, res)
    { res.end('hello world\n'); }
    )
    .listen(3000);
