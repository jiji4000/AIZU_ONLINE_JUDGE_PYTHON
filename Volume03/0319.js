let input = require('fs').readFileSync('/dev/stdin', 'utf8')
var Arr = (input.trim()).split("\n");
Arr.shift()
let data = Arr[0].split(" ").map(Number)
data.sort((a, b) => a - b);
let ans = 0
let max = Math.min(data.length,data[data.length - 1])

function search(n){
    for(var i = 0;i < data.length;++i){
        if(data[i] >= n){
            return i
        }
    }
    return -1
}

for(var i = max;i > 0;--i){
    var index = search(i)
    if(data.length - index >= i){
        ans = i
        break
    }
}
console.log(ans)