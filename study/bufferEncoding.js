/**
 * Created by lq on 2016/8/20.
 */
var fs = require('fs')
var iconv = require("iconv-lite")
var BufferHelper = require('bufferhelper')
rs = fs.createReadStream('cn.txt',
    {
        highWaterMak:11
    })

//rs.setEncoding("gb2312")

var data = []
var bufferlenth = 0
rs.on("data",function(dateread){
    data.push(dateread)
    bufferlenth += dateread.length
})
rs.on('end',function(){
    console.log(typeof (data) )

    var datas = Buffer.concat(data, bufferlenth)
    var datastr = iconv.decode(datas,'gb2312')
    console.log(datastr)
})
