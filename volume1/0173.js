let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")

for(var i = 0;i < Arr.length;++i){
    let [name,n1,n2] = Arr[i].split(" ")
    let s = parseInt(n1) + parseInt(n2)
    let p = parseInt(n1) * 200 + parseInt(n2) * 300
    console.log(name + " " + s + " " + p)
}