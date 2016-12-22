/**
 * Created by Administrator on 2016-08-02. multipromise test
 */
Q = require('q')


//d.then(function(data){console.log(data)})
//var f = function()
//{console.log("function????")}
//
//Q(f).done(function(data ){console.log("Q msg is :" + data)})
//
//f()
//

fs = require('fs')


var readFile = function (file, encoding)
{
    var deferred = Q.defer();
    fs.readFile(file, encoding, deferred.makeNodeResolver());
    return deferred.promise;
};

//fs.readFile("foo.txt","utf-8",function(error,data){
//    if (error)
//    {
//        console.log(error)
//    }
//    else
//        console.log("normal test: " + data)})


//var readFile = function(file,encoding)
//{
//    fs.readFile(file,encoding,function(error,text)
//    {
//        if(error) {
//            deferred.reject(new Error(error))
//        }else
//        {
//            deferred.resolve(text)
//        }
//        return deferred.promise
//    })
//}
var files = ["foo.txt","foo1.txt","foo12.txt"]
var Actions = files.map(function(file){
    return readFile(file, "utf-8")
})
console.log(Actions[0])

// 有异常就返回,并向上抛出异常？用于then。then。done这种模式
// 成功返回data

Q.all(Actions).done(
    function (data)
{  // Success case
    console.log(data[0].value+ " done success")
 },
 function (err)
 {  // Failed case
     console.log(' done failure msg:' + err)
  });


// 有异常也不返回
// 返回data
Q.allSettled(Actions).then(
    function (data)
    {  // Success case
        console.log(data[2].value+ " allSettled success")
    },
    function (err)
    {  // Failed case
        console.log(' allSettled failure msg:' + err)
    });

// 有异常就返回err
Q.all(Actions).then(
    function (data)
    {  // Success case
        console.log(data[0].value + " all success") // 没有 reason，value等属性
    },
    function (err)
    {  // Failed case
        console.log('all failure msg:' + err)
    });

function mytest() {
    console.log('In mytest');
    return 'aaa';
}

Q.nfcall(mytest)
    .then(
    function(value){
        console.log(value);
    });