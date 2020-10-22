let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")
let MAX = 500001
let t = new Array(MAX).fill(1)
t[0] = t[1] = -1

for(var i = 2;i < MAX;++i){
    for(var j = i * 2;j < MAX;j += i){
        t[j] = -1   
    }
}

for(var i = 0;i < Arr.length - 1;++i){
    let num = parseInt(Arr[i])
	let ans = 0;
	for(var j = 1;j <= num / 2;++j){
		if(t[j] == 1 && t[num - j] == 1)ans++;
	}
	console.log(ans)
}