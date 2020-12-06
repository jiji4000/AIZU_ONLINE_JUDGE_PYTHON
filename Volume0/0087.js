let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")

for(var i = 0;i < Arr.length;++i){
    let arr = Arr[i].split(" ")
    let stack = []

    for(var j = 0;j < arr.length;++j){
        if(arr[j] == '+'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b + a)
        }
        else if(arr[j] == '-'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b - a)       
        }
        else if(arr[j] == '*'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b * a)
        }
        else if(arr[j] == '/'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b / a)            
        }
        else{
            stack.push(parseInt(arr[j]))
        }
    }
    console.log(stack.pop())
}