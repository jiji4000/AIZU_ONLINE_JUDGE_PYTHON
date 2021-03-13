let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let dp = new Array(31).fill(0)
let pIndex = 0

dp[1] = 1
dp[2] = 2
dp[3] = 4
for(var i = 4;i < 31;++i){
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
}

while(pIndex + 1 < Arr.length){
    let n = parseInt(Arr[pIndex])
    n = parseInt(dp[n] / 3650)
    n = !n ? 1 : n + 1
    console.log(n)
    pIndex++   
}