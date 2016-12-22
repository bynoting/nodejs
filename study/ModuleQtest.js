/**
 * Created by Administrator on 2016-07-28.
 */
Q = require('q')
fs = require('fs')
//// 方式1
//var readFile = function (file, encoding)
//{  var deferred = Q.defer();
//    fs.readFile(file, encoding, deferred.makeNodeResolver());
//    return deferred.promise;
//};
//
//readFile("foo.txt", "utf-8").then(function (data)
//{  // Success case
//    console.log("success")
// },
// function (err)
// {  // Failed case
//     console.log('failure msg:' + err)
//  });


//nfcall：所谓的node风格的回调，data为callback参数，而不是如fcall那样是fs.readFile的return值

Q.nfcall(fs.readFile,"foo1.txt", "utf-8").
    then(
        function(data)
        {
            console.log(data)
        },
        function(err)
        {
            console.log(err)
        }
);

//// fcall 只能取到返回值作为参数
//Q.fcall(fs.readFile,"foo1.txt", "utf-8").
//    then(
//        function(data)
//        {
//            console.log(data)
//        },
//        function(err)
//        {
//            console.log(err)
//        }
//);