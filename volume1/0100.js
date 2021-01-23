let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")

while(1){
    let n = Arr[0]
    if(n == 0) break
    let ans = new Set()
    let dp = new Array(4000).fill(0)
    Arr.shift()
    
    for(var i = 0;i < n;++i){
        let [num,v,amount] = Arr[i].split(" ").map(Number)
        dp[num] += v * amount
        if(dp[num] >= 1000000){
            ans.add(num)
        }
    }
    if(ans.size > 0){
        for(var i = 0;i < n;++i){
            let num = Arr[i].split(" ").map(Number)[0]
            if(dp[num] >= 1000000){
                console.log(num)
                dp[num] = -1
            }
        }
    }
    else{
        console.log("NA")
    }
    for(var i = 0;i < n;++i){
        Arr.shift()
    }
}
