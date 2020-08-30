function getScore(iwana,yamame,scores){
    let score = (iwana * scores[0]) + (yamame * scores[1])
    score += ((iwana / 10) >> 0) * scores[2];
    score += ((yamame / 20) >> 0) * scores[3];
    return score
}

let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n");
let a = Arr[0].split(" ").map(Number);
let b = Arr[1].split(" ").map(Number);
let scores = Arr[2].split(" ").map(Number);

let sa = getScore(a[0],a[1],scores)
let sb = getScore(b[0],b[1],scores)

let ans = "even"
if(sa > sb){
    ans = "hiroshi"
}
else if(sa < sb){
    ans = "kenjiro"
}

console.log(ans)