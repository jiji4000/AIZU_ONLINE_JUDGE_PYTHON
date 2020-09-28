let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let d = (input.trim()).split(" ").map(Number)
d.sort((a, b) => a - b);
let ans = "no"

if(d[0] == d[3] && d[4] == d[7] && d[8] == d[11]){
    ans = "yes"
}
console.log(ans)