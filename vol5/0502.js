function roll(dir,d){
    let d2 =[];
    if(dir == "N")d2 = [d[1],d[5],d[2],d[3],d[0],d[4]]
    if(dir == "S")d2 = [d[4],d[0],d[2],d[3],d[5],d[1]]
    if(dir == "E")d2 = [d[3],d[1],d[0],d[5],d[4],d[2]]
    if(dir == "W")d2 = [d[2],d[1],d[5],d[0],d[4],d[3]]
    if(dir == "R")d2 = [d[0],d[2],d[4],d[1],d[3],d[5]]
    if(dir == "L")d2 = [d[0],d[3],d[1],d[4],d[2],d[5]]
    return d2
}
    
var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var Arr=(input.trim()).split("\n")
let d
let s

for(var i = 0;i < Arr.length;++i){
    let c = Arr[i].charAt(0)
    if(!c.match("^[0-9]$")){
        d = roll(c,d)
        s += d[0]
    }else{
        if(i != 0)console.log(s)
        d = [1,2,3,4,5,6]
        s = 1
    }
}