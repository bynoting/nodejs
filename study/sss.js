/**
 * Created by Administrator on 2016-08-23.
 */
var net = require('net')
var queryString = require('querystring')
var locallist = []
var ss = net.createServer(function(socket){
    socket.on("data",function(data){
      var dataobject = queryString.parse(data)
        //if locallist[dataobject['type']*(-1)

    })
})
