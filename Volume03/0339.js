let input = require('fs').readFileSync('/dev/stdin', 'utf8')
var Arr = (input.trim()).split("\n");
Arr.shift()
let mySet = new Set()

for(var i = 0;i < Arr.length;++i){
    let [a,b,c] = Arr[i].split(" ").map(Number)
    let n = a * a * a + b * b * b + c * c * c
    mySet.add(n)    
}
console.log(Arr.length - mySet.size)