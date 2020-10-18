let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")

while(1){
    let n = Arr[0] / 4
    if(n == 0) break
    Arr.shift()
    let s = 0
    for(var i = 0;i < n;++i){
        s += parseInt(Arr[0])
        Arr.shift()
    }
    console.log(s)
}