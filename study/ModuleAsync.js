/**
 * Created by lq on 2016/9/3.
 */


var fs = require('fs')
var Async =require('async')


Async.waterfall(
    [function(cb){
    fs.readFile('foo.txt','utf-8',function(err,data){
        if (err) {console.log("1 error")}
        cb(err, data)
     })
    },
    function(results,cb)
    {
        fs.readFile(results,'utf-8',function(err,data){
            cb(err, data)
        })
    }
    ],
    function(err,results){
        if(err)
        {console.log(err)}
        else
        {console.log(results)}
    })
