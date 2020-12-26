let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n").map(Number)
let cnt = new Array(4001).fill(0);

for(var i = 0;i < 1001;++i){
    for(var j = 0;j < 1001;++j){
        cnt[i + j]++;
    }
}

for(var i = 0;i < Arr.length;++i){
    let ans = 0
    let n = Arr[i]
    for(var j = 0;j < n + 1;++j){
        ans += cnt[j] * cnt[n - j]
    }
    console.log(ans)
}