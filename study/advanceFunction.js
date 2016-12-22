require("os")
var list = [2,3,4,5] //new Array()
list = list.concat([5,6,7])
console.log("the array list value is:" + list )
var rlist = list.map( (x) => x+1 )
console.log("map return:" +  rlist)

rlist = list.reduce( (x,y) => x+y )
console.log("reduce return :" + rlist)

rlist = list.filter( (x) => x%2==0)
console.log ("filter return :" + rlist)