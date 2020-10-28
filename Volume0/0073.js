var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var Arr=(input.trim()).split("\n")

for(var i = 0;i < Arr.length - 2;i += 2){
  let x = parseInt(Arr[i])
  let h = parseInt(Arr[i + 1])
  let s = x * Math.sqrt((4 * h * h) + (x * x)) + (x * x)
  console.log(s.toFixed(5))
}