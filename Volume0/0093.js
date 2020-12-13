var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr = (input.trim()).split("\n");

for(var i = 0;i < Arr.length - 1;++i){
   if(i != 0)console.log("");
   let [a,b] = Arr[i].split(" ").map(Number)
   let ans=[];
    if(a % 4 != 0){
        a += 4 - (a % 4)
    }

    for(var j = a;j <= b;j += 4){
        if(j % 400 == 0){
            ans.push(j)
        }
        else if(j % 100 != 0){
            ans.push(j)
        }
   }
   if(ans.length==0)console.log("NA")
   else{
        ans.forEach(function(v){console.log(v)})  
   } 
}