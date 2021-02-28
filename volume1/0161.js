let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let pIndex = 0

while(pIndex + 1 < Arr.length){
    let n = parseInt(Arr[pIndex])
    let times = new Map()
    
    for(var i = 0;i < n;++i){
        let [id,m1,s1,m2,s2,m3,s3,m4,s4] = Arr[pIndex + 1 + i].split(" ").map(Number);
        let time = (m1 * 60 + s1) + (m2 * 60 + s2) + (m3 * 60 + s3) + (m4 * 60 + s4)
        times.set(id,time)
    }
    let sorted = new Map([...times.entries()].sort((a, b) => a[1] - b[1]));
    var index = 0
    for (const [key] of sorted.entries()){
        if(index == 0 || index == 1 || index == sorted.size - 2){
            console.log(key)
        }
        index++
    }
    pIndex += n + 1
}