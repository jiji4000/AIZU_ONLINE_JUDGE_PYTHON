var input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")

while(1){
    let n = Arr[0]
    if(n == 0) break;
    let ans = ''
    while(n){
        let b = n % 10
        if(b < 0){
            b += 10
        }
        ans += b.toString()
        n = (n - b) / -10
    }
    console.log(ans.split("").reverse().join(""))
    Arr.shift()
}