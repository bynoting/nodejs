/**
 * Created by Administrator on 2016-07-27.
 */
var moment = require('moment');
var array = [11,21,244,44]

array.forEach(function(data)
{
    console.log(data + " " )

})

var foo = function(){
    var bar = function(){
        var a = 100
        return a
    }
    console.log(bar())
}

foo()

//joson

var josnv = {'a':"a",b:'b',c:'c'}
console.log(josnv['a'])

let startDate = "2021-10-19"
let startData = new Date(startDate.replace(/-/g, '/'));

console.log(moment(startDate))
console.log(moment(startData))

console.log( typeof(moment(startDate)) )

