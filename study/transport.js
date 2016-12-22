/**
 * Created by lq on 2016/8/23.端口转发实现进入防火墙内非标准远程桌面端口的实现
 */

var net = require("net")
var RealIP = '192.168.4.2'
var RealPort = 3389
var SrcIP = '58.30.28.131'
var SrcPort = 8098

// do you remenber?
var SrcServer = net.createServer(function(socket){
    console.log("socket is conneted")
    var DstClientsocket = net.connect(RealPort, RealIP, function(){
        console.log("Dstclientsocket is connect!")

    })
    socket.on('data',(data)=>{
        console.log("srcclient rev data!")
        socket.pause()
        DstClientsocket.write(data)
        socket.resume()
    })
    DstClientsocket.on('data',function(data){
        console.log("DstClientsocket rev data!")
        socket.write(data)

    })
    DstClientsocket.on('error',function(err)
        {
            console.log("DstClientsocket error",err)
        })
    socket.on('error',function(err)
    {
        console.log("socket error",err)
    })
    socket.on("end",function(){
        console.log("connection is closed")
})
    //socket.pipe(Dstclientsocket)

})

SrcServer.listen(SrcPort,()=>{
    console.log('server is ready!')
});




