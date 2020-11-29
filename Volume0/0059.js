let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr=(input.trim()).split("\n")

for(var i = 0;i < Arr.length;++i){
    let [x1,y1,x2,y2,x3,y3,x4,y4] = Arr[i].split(" ").map(Number)
    let ans = "NO"
    if(x2 >= x3 && x1 <= x4){
        if(y1 <= y4 && y2 >= y3){
            ans = "YES"
        }
    }
    console.log(ans)
}