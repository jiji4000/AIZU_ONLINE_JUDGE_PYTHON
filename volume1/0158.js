let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")

for(var i = 0;i < Arr.length - 1;++i){
    let n = Arr[i]
    let ans = 0
    while(n != 1){
        if(n % 2 == 0){
            n = parseInt(n / 2)
        }
        else{
            n = (n * 3) + 1
        }
        ans++
    }
    console.log(ans)
}