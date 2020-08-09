var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
let lefts = [0,0,0,0]
let rights = [0,0,0,0]

function push(eyes,num){
    if(num >= 1.1){
        eyes[0]++
    }else if(num < 1.1 && num >= 0.6){
        eyes[1]++
    }else if(num < 0.6 && num >= 0.2){
        eyes[2]++
    }else{
        eyes[3]++
    }
}

for(var i = 0;i < Arr.length;++i){
    let nums = Arr[i].split(" ").map(Number);
    push(lefts,nums[0])
    push(rights,nums[1])
}

for(var i = 0;i < 4;++i){
    console.log(lefts[i],rights[i])
}