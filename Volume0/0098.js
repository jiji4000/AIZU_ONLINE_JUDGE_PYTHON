let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let dp = new Array(100).fill(0).map(() => new Array(100).fill(0))
let sum = new Array(100).fill(0)
let n = Arr[0]
Arr.shift()
let ans = Number.MIN_SAFE_INTEGER

for(var i = 0;i < n;++i){
    arr = Arr[i].split(" ").map(Number);
    for(var j = 0;j < n;++j){
        sum[j + 1] = sum[j] + arr[j]
    }
    for(var j = 0;j < n;++j){
        for(var k = j;k < n;++k){
            dp[j][k] = Math.max(0,dp[j][k]) + sum[k + 1] - sum[j]
            ans = Math.max(ans,dp[j][k])
        }
    }
}
console.log(ans)