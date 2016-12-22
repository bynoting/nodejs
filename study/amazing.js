var net = require('net')
var serverChat = net.createServer()
var clientList = []
serverChat.on("connection",function(client){

   client.name = client.remoteAddress +":" + client.remotePort
    client.write("hi "+client.name +"\n")
    clientList.push(client)
})
serverChat.listen(9000)
