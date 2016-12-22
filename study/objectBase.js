/**
 * Created by Administrator on 2016-08-22.
 */

function father(aname){
    this.name = aname
    this.showname2 = function()
    {
        console.log("showname2 is:",this.name)
    }
}
father.showname3 = function(){
    console.log("showname3 is:",this.name)
}
father.prototype.showname  = function(){
    console.log("showname is:",this.name)
}

var f = new father("HH")
var f2 = new father("HH2")

//f.showname3()
//f2.showname3()



