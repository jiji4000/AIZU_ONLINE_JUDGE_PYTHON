let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let [h,r] = input.trim().split(" ").map(Number)
ans = 0
if(h + r < 0) ans = -1
if(h + r > 0) ans = 1
console.log(ans)