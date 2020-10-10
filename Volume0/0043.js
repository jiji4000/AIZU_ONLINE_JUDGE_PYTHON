function isMatch(num){
    for(var head = 1;head < 10;++head){
     if(num[head] >= 2){
      let hands = new Array(12).fill(0)
      for(var i = 1;i < 10;++i)hands[i] = num[i]
      hands[head] -= 2
      let match = true
      for(var i = 0; i < 10;++i)
       while(hands[i] % 3)
        for(var j = 0;j < 3;++j){
         hands[i + j]--;
         if(hands[i + j] < 0) match = false
        }
      if(match)return true;
     }
    }
    return false;
   }
   
   let input = require('fs').readFileSync('/dev/stdin', 'utf8')
   let Arr = (input.trim()).split("\n")
   
   for(var i = 0;i < Arr.length;++i){
       let hand = Arr[i]
       let num = new Array(10).fill(0)
       let corrects = []
       let ans = "0"
       
       while(hand > 0){
           num[Math.floor(hand % 10)]++  
           hand = Math.floor(hand / 10)
       }
       for(var j=1;j < 10;++j){
           if(num[j] < 4){
               num[j]++;
               if(isMatch(num)){
                   corrects.push(j)
               }
               num[j]--;
           }
       }
       for(var j = 0;j < corrects.length;++j){
           if(j == 0){
               ans = ""
           }
           else{
               ans += " "
           }
           ans += corrects[j]
       }
       console.log(ans)
   }