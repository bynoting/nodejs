/**
 * Created by Administrator on 2016-08-18.
 */


var step = require('step')
var fs = require("fs")

// ´®ÐÐ1
step(
    function readFile1()
    {
        fs.readFile("foo.txt","utf-8",this)
        console.log( this.name )
    },
    function readFile2(err,content)
    {
        fs.readFile("foo1.txt","utf-8",this)
        console.log("0",content)
    },
    function done(err,content1){
        console.log("1",content1)
    }
)

// ²¢ÐÐ2
step(
    function readFile1()
    {
    fs.readFile("foo.txt","utf-8",this.parallel())
    fs.readFile("foo1.txt","utf-8",this.parallel())
    },
    function done(err,content1,content2){
        console.log("2",content1,content2)
    }
)