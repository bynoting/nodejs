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
    {key: 1, value: "����˫", achievement: 83.5},
    {key: 2, value: "�ּ�", achievement: 78},
    {key: 3, value: "������", achievement: 68},
    {key: 4, value: "�ּҺ�", achievement: 67.5},
    {key: 5, value: "ţӢ��", achievement: 67},
    {key: 6, value: "������", achievement: 65},
    {key: 7, value: "������", achievement: 64.5},
    {key: 8, value: "�¾���", achievement: 64},
    {key: 9, value: "�����", achievement: 63},
    {key: 10, value: "Ǯ����", achievement: 62},
    {key: 11, value: "�����", achievement: 61.5},
    {key: 12, value: "���Ң", achievement: 61},
    {key: 12, value: "��˳", achievement: 61},
    {key: 14, value: "�����", achievement: 60},
    {key: 15, value: "������", achievement: 57},
    {key: 15, value: "����", achievement: 57},
    {key: 17, value: "�ܿ��", achievement: 56.5},
    {key: 18, value: "������", achievement: 56},
    {key: 19, value: "�¼���", achievement: 55.5},
    {key: 20, value: "������", achievement: 53},
    {key: 21, value: "�ܻԽ�", achievement: 51},
    {key: 22, value: "������", achievement: 49},
    {key: 22, value: "����", achievement: 49},
    {key: 24, value: "����ΰ", achievement: 48.5},
    {key: 25, value: "��˼ά", achievement: 48},
    {key: 26, value: "ͯ����", achievement: 47.5},
    {key: 26, value: "����", achievement: 47.5},
    {key: 28, value: "����", achievement: 45.5},
    {key: 29, value: "���ΰ", achievement: 42},
    {key: 29, value: "������", achievement: 42},
    {key: 31, value: "����", achievement: 38.5},
    {key: 32, value: "����", achievement: 38}
]

/*
����1�����ֵ�����
����2�����ֵ�����
����3���������������
 */
fGroup( classRankingList,7,"achievement")

function fGroup(aList,aGnum,aKey) {

    console.log('================')
    console.log("Show Object : aList[0].achievement 's value is :" + aList[0][aKey])
    console.log(typeof((aList[0].achievement)) )
    aList.sort(sorter(aKey))

    // ��ģ����ÿ��ĸ���Ҳ��ִ�д�����
    var actionNum =  Math.floor(aList.length / aGnum )
    var gMerberNum = actionNum
    console.log( "actionNum is : " + actionNum)
    //������
    var leftNum = aList.length % aGnum
    console.log( "leftNum is : " + leftNum)

    var rList = new Array(aGnum)

    // ��ʼ�����Ա
    for (var i = 0; i <aGnum ; i++) {
        rList[i] = []
    }

    var sortFlag = true // ������
    // ����ֵ�Ӵ�С�����˰������±갴��С����->�Ӵ�С..�ķ�ʽ����ֵ���ֵ���������ȥ
    for (var i = 0; i <actionNum ; i++) {
             for (var j = 0; j < aGnum; j++) {
                if (sortFlag == true )
                    rList[j].push(aList[ i *aGnum   + j ])
                else
                    rList[aGnum -1 - j].push(aList[ i *aGnum   + j])
            }
        sortFlag = !sortFlag
    }
    // ������ܾ��֣�ʣ�������ְ�
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
    // ��������ƽ��ֵ
    for (var i = 0; i < aGnum; i++) {
        console.log( "the avg is:"  + Math.floor( sumArr (rList[i],aKey ) / rList[i].length ) )
    }
    return rList
}

/*
���
 */
function sumArr(arr,aKey){
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum += Number(arr[i][aKey]);//ǰ����arr�и��������֣������������ַ���
//����������ַ�����sum += Number(arr[i]);
    }
    return sum;
}
/*
�������
����
aGroupNums �����������
 */
function getRandomGroup( aGroupNum)
{
    // ���ó�ʼֵ
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
������
����
key������ؼ���
 */
function sorter(key) {
    return ( (a,b)=> {return Number(b[key]) - Number(a[key])} )
        // return function (a, b) {
        //     return Number(b[key]) - Number(a[key])
        // }
    }




