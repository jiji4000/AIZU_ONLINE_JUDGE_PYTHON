let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")

for(var i = 0;i < Arr.length - 1;i += 2){
    let arr = Arr[i + 1].split(" ").map(Number)
    let turn = false
    let index = 0
    let ohajiki = 32
    while(ohajiki > 0){
        if(turn){
            ohajiki -= arr[index]
            if(ohajiki < 0){
                ohajiki = 0
            }
            if(++index >= arr.length){
                index = 0
            }
        }
        else{
            ohajiki -= (ohajiki - 1) % 5
        }
        turn = !turn
        console.log(ohajiki)
    }
}