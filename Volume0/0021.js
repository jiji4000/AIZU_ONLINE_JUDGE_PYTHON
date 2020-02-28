var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n = Arr[0];
Arr.shift();

for(var i = 0;i < n;++i){
    var nums = Arr[i].split(" ").map(Number);
    // なぜかparallelが通らなかった
    var k1 = (nums[3] - nums[1]) / (nums[2] - nums[0]);
    var k2 = (nums[7] - nums[5]) / (nums[6] - nums[4]);
    if(k1.toFixed(6) == k2.toFixed(6)){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
}