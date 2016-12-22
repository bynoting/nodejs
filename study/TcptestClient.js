/**
 * Created by lq on 2016/8/22.
 */
var net = require('net')

var client = net.connect(9015,'192.168.4.6',function(){
        console.log("client is connected!")
        client.write("i'm client! \r\n")

})
client.on("data",function(data){
    console.log("client rev data is ",data.toString())
    client.end()
})
client.on("end",function(){
    console.log("client connection is closed")
})
