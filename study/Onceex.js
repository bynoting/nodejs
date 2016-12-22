/**
 * Created by Administrator on 2016-07-13.
 */
events = require("events")
var proxy = new events.EventEmitter()
var callbackvar = function(data){
    console.log(data + " callback !!!")
}
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};


var select = function(callback){
    proxy.once("S",callback)
    //setTimeout(function(){console.log("time out")},1000*1)
    sleep(1000);
    proxy.emit("S","proxy")
    proxy.emit("S","proxy1")

}

select(callbackvar)

select(callbackvar)



