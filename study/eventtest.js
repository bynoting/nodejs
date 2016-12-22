/**
 * Created by Administrator on 2016-07-27.
 */
var event = require("events")
var emitter = new event.EventEmitter()

emitter.on("eventtest",function()
{
    console.log("it eventtest")
})

emitter.emit("eventtest")



