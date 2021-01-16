let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n");
let map = new Map()
Arr.shift()
let maxScore = -10000
let index = 0

for(var i = 0;i < Arr.length;++i){
    let [key,num] = Arr[i].split(" ").map(Number)
    if(!map.has(key.toString())){
        if(maxScore < num){
            maxScore = num
            index = key
        }
        else if(maxScore == num){
            // 同値の場合は参加番号少ない
            if(index > key){
                index = key
            }
        }
        map.set(key.toString(),num)
    }
    else{
        let v = map.get(key.toString())
        map.set(key.toString(),v + num)
        // 最高スコアかつ-だった場合ソートして、入れ直す
        if((v == maxScore && num < 0) || (v + num == maxScore)){
            map = new Map([...map.entries()].sort(function(x,y){
                let t = y[1] - x[1]
                if(t != 0){
                    return t
                }
                return x[0] - y[0]
            }))
            index = map.keys().next().value
            maxScore = map.get(index.toString()) 
        }
        else if(v + num > maxScore){
            maxScore = v + num
            index = key
        }
    }
    console.log(index + " " + maxScore)
}