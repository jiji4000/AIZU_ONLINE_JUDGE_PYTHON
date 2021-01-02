let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let dp = new Array(10).fill(0).map(() => new Array(1001).fill(0))

for(var i = 0;i < 1001;++i){
    if(i <= 100) dp[1][i] = 1
    else dp[1][i] = 0
}

for(var i=2;i < 10;++i){
	for(var j = 1;j < 1001;++j){
		if(j - i >= 0) dp[i][j] += dp[i][j - i]
		if(j - (i - 1) >= 0) dp[i][j] += dp[i - 1][j - (i - 1)]
		if(j - 101 >= 0) dp[i][j] -= dp[i - 1][j - 101]
	}
}

for(var i = 0;i < Arr.length - 1;++i){
    let [n,s] = Arr[i].split(" ").map(Number)
    console.log(dp[n][s])
}