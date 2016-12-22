/**
 * Created by lq on 2016/8/22.
 */
var net = require('net')

var server = net.createServer(function(socket){
    socket.pipe(socket) // 输入直接转为输出
    //socket.on("data",function(data){
    //    socket.write("i'm catch U!")
    //})
    socket.on("end",function(){
        console.log("connection is closed")
    })
    socket.write("welcome!")
})

server.listen(8124,function(){
    console.log('server bound')
})