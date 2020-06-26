// 我们系统班级id和hk系统id的转换对照表
var HkClassIdList = {
    "4a0bc6161c6a4381a402f03a1c467613":"00000005",
    "b59e60da1ad047b082f87ddf0ada6d86":"00000006",
    "399684ded21d4d97abcf756ffee2aa7e":"00000007",
    "950ead2ecd8a469aba820dac638dbccd":"00000008",
    "2e770337e4f4410e8ef33ad0161ff2da":"00000009",
    "a8a2a4f14a6340dbb64a52a63b818b71":"00000010",
    "78c83fefd1b443a7944dbee32004cf7d":"00000011",
    "98d2094116b64d529c666bdda7e7dbc3":"00000012",
    "f533901924184c08b44d0b750fc61f31":"00000013",
    "802711cb9d5342bd8b480e867265a23b":"00000014",
    "ec9bc1fc2b744208bf8e90ffb42508fc":"00000015",
    "07f2946e2ee94a428274bc2bbc334b83":"00000016",
    "a0d7691c0d7547c78a356ef50fb78f5d":"00000017",
    "05b18b4ed20d4c0eb8c8c39145b7eeca":"00000018",
    "afecc39ec34a40958e0f8e0a4879682e":"00000019",
    "f5d461ec3af84613bec1e7cff0408fd8":"00000020",
    "216c6ccf69c84c4ba2d4c4cba9bcf58f":"00000021",
    "1f437ebea1d243c19014ddf1857a1a93":"00000022",
    "ac5871a2896f44e082d6fd389f445894":"00000023",
    "626883d765074120a07357247eeda033":"00000024"
}

// 海康系统班级id和班级名称的转换对照表
var HkClassNameList = {
    "00000005":	"19 智能制造"                      ,
    "00000006":	"19 网络信息安全"                  ,
    "00000007":	"19 数字媒体技术应用3 + 4"         ,
    "00000008":	"19 电子商务（ 中高职一体） "      ,
    "00000009":	"19 数字媒体技术应用"              ,
    "00000010":	"19 软件与信息服务"                ,
    "00000011":	"19 计算机网络技术 "               ,
    "00000012":	"19 城市轨道交通运营管理"          ,
    "00000013":	"19 跨境电子商务"                  ,
    "00000014":	"19 数控技术应用（ 1）"            ,
    "00000015":	"19 计算机平面设计"                ,
    "00000016":	"19 电子商务（ 2）"                ,
    "00000017":	"19 电子商务（ 1）"                ,
    "00000018":	"19 数控技术应用（ 2）"            ,
    "00000019":	"17 城市轨道交通运营管理（ 2）"    ,
    "00000020":	"17 智能制造（ 2）"                ,
    "00000021":	"17 智能制造（ 1）"                ,
    "00000022":	"17 电商高职"                      ,
    "00000023":	"17 计算机高职（ 1）"     				,
    "00000024":	"17 计算机高职（ 2）"
}

// 外部导出变量
module.exports.HkClassIdList = HkClassIdList;
module.exports.HkClassNameList = HkClassNameList


// //本地调用方式示例
// var ourID = "4a0bc6161c6a4381a402f03a1c467613"
// var hkID = "00000005"
//
// console.log(
//     HkClassIdList[ourID]
// )
// console.log(
//     HkClassNameList[hkID]
// )

////外部文件引用方式示例
// var args = require("./HkClassList.js")
// console.log( args.HkClassNameList["00000010"] )





