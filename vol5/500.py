let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let d = (input.trim()).split("\n");

while(1){
    let n = d.shift() - 0;
    if (n === 0) break;
    let aSum = 0;
    let bSum = 0;
    
    for(i = 0;i < n;++i){
      var arr = ((d.shift()).split(" ").map(Number));
      if(arr[0] > arr[1]){
          aSum += arr[0] + arr[1];
      }
      else if(arr[1] > arr[0]){
          bSum += arr[0] + arr[1]
      }
      else{
          aSum += arr[0];
          bSum += arr[1];
      }
    }
    console.log(aSum + " " + bSum);
}