let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n").map(Number)
let pIndex = 0

while(pIndex + 1 < Arr.length){
    let n = Arr[pIndex]
    let arr = []
    let ans = 0
    for(var i = 0;i < n;++i){
        arr.push(Arr[++pIndex])
    }
    // bubble
    for(var i = 0;i < n;++i){
        for(var j = 0;j < n - i;++j){
            if(arr[j + 1] < arr[j]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                ans++
            }
        }
    }
    pIndex++
    console.log(ans)
}