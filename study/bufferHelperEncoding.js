/**
 * Created by lq on 2016/8/20.
 * ansi ������ı���ȡ
 */
var fs = require('fs')
var iconv = require("iconv-lite")
var BufferHelper = require('bufferhelper') //npm ��װbufferhelper

var bufferHelper = new BufferHelper()
rs = fs.createReadStream('cn.txt',
    {
        highWaterMak:11
    })

rs.on("data",function(dateread){
    bufferHelper.concat(dateread)
})
rs.on('end',function(){
    console.log(typeof (data) )
    var datas = bufferHelper.toBuffer()
    var datastr = iconv.decode(datas,'gb2312')
    console.log(datastr)
})
