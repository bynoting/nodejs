/**
 * Created by Administrator on 2016-07-28.
 */
Q = require('q')
fs = require('fs')
//// ��ʽ1
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


//nfcall����ν��node���Ļص���dataΪcallback��������������fcall������fs.readFile��returnֵ

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

//// fcall ֻ��ȡ������ֵ��Ϊ����
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