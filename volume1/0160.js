let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n")
let pIndex = 0
let WEIGHT = [2,5,10,15,20,25]
let SIZE = [60,80,100,120,140,160]
let PLICE = [600,800,1000,1200,1400,1600]

while(1){
    let n = parseInt(Arr[pIndex])
    if(n == 0) break
    let s = 0
    
    for(var i = 0;i < n;++i){
        let [x,y,h,w] = Arr[pIndex + 1 + i].split(" ").map(Number);
        let size = x + y + h
        let index = 0
        
        if(size <= 160 && w <= 25){
            // 重さ
            for(var j = 0;j < WEIGHT.length;++j){
                if(w <= WEIGHT[j] && size <= SIZE[j]){
                    index = j
                    break
                }
            }
            s += PLICE[index]
        }
    }
    console.log(s)
    pIndex += n + 1
}