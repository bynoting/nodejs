// var args = require("./HkClassList.js")
// console.log( args.HkClassNameList["00000010"] )

list = {
    "stu":
        [
            {"name":"a","num":"1","score":"98"},
            {"name":"b","num":"16","score":"67"},
            {"name":"c","num":"24","score":"43"},
            {"name":"d","num":"17","score":"67"},
            {"name":"e","num":"4","score":"89"},
            {"name":"f","num":"11","score":"78"},
            {"name":"g","num":"25","score":"33"},
            {"name":"h","num":"15","score":"68"},
            {"name":"i","num":"3","score":"90"},
            {"name":"j","num":"6","score":"87"},
            {"name":"k","num":"18","score":"64"},
            {"name":"l","num":"19","score":"62"},
            {"name":"m","num":"10","score":"78"},
            {"name":"n","num":"14","score":"71"},
            {"name":"o","num":"2","score":"94"},
            {"name":"p","num":"8","score":"86"},
            {"name":"q","num":"12","score":"76"},
            {"name":"r","num":"7","score":"86"},
            {"name":"s","num":"22","score":"45"},
            {"name":"t","num":"26","score":"24"},
            {"name":"u","num":"13","score":"74"},
            {"name":"v","num":"20","score":"53"},
            {"name":"w","num":"5","score":"89"},
            {"name":"x","num":"23","score":"45"},
            {"name":"y","num":"9","score":"78"},
            {"name":"z","num":"21","score":"53"},
        ]
}
var classRankingList = [
    {key: 1, value: "胡译双", achievement: 83.5},
    {key: 2, value: "林佳", achievement: 78},
    {key: 3, value: "李夏青", achievement: 68},
    {key: 4, value: "林家和", achievement: 67.5},
    {key: 5, value: "牛英建", achievement: 67},
    {key: 6, value: "崔雅宁", achievement: 65},
    {key: 7, value: "徐晓磊", achievement: 64.5},
    {key: 8, value: "章静宜", achievement: 64},
    {key: 9, value: "泮政韬", achievement: 63},
    {key: 10, value: "钱依琳", achievement: 62},
    {key: 11, value: "陈旭楠", achievement: 61.5},
    {key: 12, value: "冯楚尧", achievement: 61},
    {key: 12, value: "陈顺", achievement: 61},
    {key: 14, value: "黄郁璞", achievement: 60},
    {key: 15, value: "张乐宇", achievement: 57},
    {key: 15, value: "李坤", achievement: 57},
    {key: 17, value: "曹骏昊", achievement: 56.5},
    {key: 18, value: "林妮娜", achievement: 56},
    {key: 19, value: "陈佳鑫", achievement: 55.5},
    {key: 20, value: "王威峰", achievement: 53},
    {key: 21, value: "周辉杰", achievement: 51},
    {key: 22, value: "陈向阳", achievement: 49},
    {key: 22, value: "徐旭东", achievement: 49},
    {key: 24, value: "董佳伟", achievement: 48.5},
    {key: 25, value: "周思维", achievement: 48},
    {key: 26, value: "童正洋", achievement: 47.5},
    {key: 26, value: "蒋达", achievement: 47.5},
    {key: 28, value: "龚礼波", achievement: 45.5},
    {key: 29, value: "吴嘉伟", achievement: 42},
    {key: 29, value: "茹欣怡", achievement: 42},
    {key: 31, value: "董栋", achievement: 38.5},
    {key: 32, value: "付诚", achievement: 38}
]

/*
参数1：待分的数据
参数2：待分的组数
参数3：分组排序的列名
 */
fGroup( classRankingList,7,"achievement")

function fGroup(aList,aGnum,aKey) {

    console.log('================')
    console.log("Show Object : aList[0].achievement 's value is :" + aList[0][aKey])
    console.log(typeof((aList[0].achievement)) )
    aList.sort(sorter(aKey))

    // 求模数（每组的个数也是执行次数）
    var actionNum =  Math.floor(aList.length / aGnum )
    var gMerberNum = actionNum
    console.log( "actionNum is : " + actionNum)
    //求余数
    var leftNum = aList.length % aGnum
    console.log( "leftNum is : " + leftNum)

    var rList = new Array(aGnum)

    // 初始化组成员
    for (var i = 0; i <aGnum ; i++) {
        rList[i] = []
    }

    var sortFlag = true // 正序反序
    // 按照值从大到小，依此按组名下标按从小到大->从大到小..的方式，把值均分到各个组里去
    for (var i = 0; i <actionNum ; i++) {
             for (var j = 0; j < aGnum; j++) {
                if (sortFlag == true )
                    rList[j].push(aList[ i *aGnum   + j ])
                else
                    rList[aGnum -1 - j].push(aList[ i *aGnum   + j])
            }
        sortFlag = !sortFlag
    }
    // 如果不能均分，剩余的随机分吧
    if (leftNum > 0)
    {
        var arr = getRandomGroup(aGnum)
        // console.log("getRandomGroup")

        for (var i = 0; i < leftNum; i++) {
           // console.log(arr[i])
            rList[arr[i]].push( aList[ aGnum*actionNum +i ])
        }
    }

   console.log(rList)
    // 输出检测下平均值
    for (var i = 0; i < aGnum; i++) {
        console.log( "the avg is:"  + Math.floor( sumArr (rList[i],aKey ) / rList[i].length ) )
    }
    return rList
}

/*
求和
 */
function sumArr(arr,aKey){
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum += Number(arr[i][aKey]);//前提是arr中各项是数字，而不是数字字符串
//如果是数字字符串：sum += Number(arr[i]);
    }
    return sum;
}
/*
随机排序
参数
aGroupNums ：分组的数量
 */
function getRandomGroup( aGroupNum)
{
    // 设置初始值
    var arr= []
    for (var i = 0; i <aGroupNum; i++) {
        arr.push(i);
    }
    arr.sort(()=>{return 0.5 - Math.random()})
    // arr.sort(
    //     function () {
    //         return 0.5 - Math.random();
    //     }
    // );
    return arr
}
/*
排序函数
参数
key：排序关键字
 */
function sorter(key) {
    return ( (a,b)=> {return Number(b[key]) - Number(a[key])} )
        // return function (a, b) {
        //     return Number(b[key]) - Number(a[key])
        // }
    }




