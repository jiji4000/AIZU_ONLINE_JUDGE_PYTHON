let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let pIndex = 0

while(pIndex + 1 < Arr.length){
    let a = 0
    let b = 0
    let c = Arr[pIndex][0]
    for(var j = 1;j < Arr[pIndex].length;++j){
        if(Arr[pIndex][j] != c){
            if(c == 'A') b++
            else a++
        }
        else{
            if(Arr[pIndex][j] == 'A') a++
            else b++
        }
        c = Arr[pIndex][j]
    }
    if(a > b){
        a++
    }
    else{
        b++
    }
    console.log(a + " " + b)    
    pIndex++
}