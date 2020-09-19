let years = [0,1868,1912,1926,1989]
let s = ["","M","T","S","H"]
let ans = 0
let index = 4

let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let [e,y] = input.trim().split(" ").map(Number)

if(e == 0){
    for(var i = 1;i < 4;++i){
        if(y >= years[i] && y < years[i + 1]){
            index = i
            break
        }
    }
    ans = s[index] + (y - years[index] + 1)
}else{
    ans = years[e] + y - 1
}
console.log(ans)