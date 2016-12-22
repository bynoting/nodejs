/**
 * Created by Administrator on 2016-07-27.
 */

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

