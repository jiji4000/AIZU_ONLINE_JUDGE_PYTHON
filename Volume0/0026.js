let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let d = (input.trim()).split("\n")
let t = new Array(14).fill(0).map(() => new Array(14).fill(0))
let max = 0
let ans = 0

for(var i = 0;i < d.length;++i){
    let [x,y,s] = d[i].split(",").map(Number)
	x += 2
	y += 2
	switch(s){
		case 3:
			t[y - 2][x]++
			t[y + 2][x]++
			t[y][x - 2]++
			t[y][x + 2]++
		case 2:
			t[y + 1][x + 1]++
			t[y - 1][x - 1]++
			t[y + 1][x - 1]++
			t[y - 1][x + 1]++
		case 1:
			t[y][x + 1]++
			t[y][x - 1]++
			t[y - 1][x]++
			t[y + 1][x]++
			t[y][x]++
	}
}

for(var i = 2;i < 12;++i){
	for(var j = 2;j < 12;++j){
		if(t[i][j] == 0)ans++
		max = Math.max(max,t[i][j])
	}
}
console.log(ans)
console.log(max)
