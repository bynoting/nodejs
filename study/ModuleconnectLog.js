/**
 * Created by Administrator on 2016-08-15. connect �м�� ��������
 */
var connect = require('connect');

var app = connect()
// logģ����Ҫ����npm���ء���ԭ�����÷����������Ʒ�logger
var Log = require("morgan")
app.use(Log())
    .use(function (req, res)
    { res.end('hello world\n'); }
    )
    .listen(3000);
