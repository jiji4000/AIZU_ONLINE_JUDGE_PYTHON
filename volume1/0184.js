let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let dp = new Array(12).fill(0)
let pIndex = 0

while(1){
    let n = parseInt(Arr[pIndex])
    if(n == 0) break
    
    for(var i = 0;i < dp.length;++i){
        dp[i] = 0
    }
    
    for(var i = 0;i < n;++i){
        let index = parseInt(Arr[pIndex + i + 1] / 10)
        dp[index]++;        
    }

    for(var i = 7;i < dp.length;++i){
        dp[6] += dp[i]
    }
    for(var i = 0;i < 7;++i){
        console.log(dp[i])
    }
    pIndex += n + 1
}
