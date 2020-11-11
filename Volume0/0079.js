let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr=(input.trim()).split("\n")

let [x0,y0] = Arr[0].split(",").map(Number)
let vNum = 2
let s = 0

function calc(i1,i2){
    let [x1,y1] = Arr[i1].split(",").map(Number)
    let [x2,y2] = Arr[i2].split(",").map(Number)
    let a = getD(x0,y0,x1,y1)
    let b = getD(x1,y1,x2,y2)
    let c = getD(x0,y0,x2,y2)
    let z = (a + b + c) / 2
    return heron(a,b,c,z)
}

function getD(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2))
}

function heron(a,b,c,z){
    return Math.sqrt(z * (z - a) * (z - b) * (z - c))
}

while(vNum < Arr.length){
    s += calc(vNum - 1,vNum)
    ++vNum
}
console.log(s)