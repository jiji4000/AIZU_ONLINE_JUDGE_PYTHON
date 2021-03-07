let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let MAX = 1000001
let dp = new Array(MAX).fill(0)

for(var i = 1;i < MAX;i *= 2){
	for(var j = i;j < MAX;j *= 3){
		for(var k = j;k < MAX;k *= 5){
			dp[k] = 1;
		}
	}
}

for(var i = 0;i < Arr.length - 1;++i){
    let ans = 0
    let [m,n] = Arr[i].split(" ").map(Number);
    
    for(var j = m;j <= n;++j){
		if(dp[j]) ans++
    }
    console.log(ans)
}