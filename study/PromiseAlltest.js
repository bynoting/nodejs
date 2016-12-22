/**
 * Created by Administrator on 2016-07-28.
 */
fs = require('fs')


var readFile = function (file, encoding)
{  var deferred = Q.defer();
    fs.readFile(file, encoding, deferred.makeNodeResolver());
    return deferred.promise;
};
// not clear。。。。
 Deferred =
{  this.state = 'unfulfilled';
    this.promise = new Promise();
};

Deferred.prototype.all = function (promises)
{  var count = promises.length;
    var that = this;
    var results = [];
    promises.forEach(function (promise, i)
    {    promise.then(function (data)
        {   count--;
            results[i] = data;
            if (count === 0)
            {
                that.resolve(results);
            }
        },
        function (err)
        {      that.reject(err);    });
    });
    return this.promise;
};

var promise1 = readFile("foo.txt",
    "utf-8");
var promise2 = readFile("bar.txt", "utf-8");
var deferred = new Deferred();

deferred.all([promise1, promise2]).then(
    function (results)
    {  // TODO
    },
    function (err)
    {  // TODO
    }
);