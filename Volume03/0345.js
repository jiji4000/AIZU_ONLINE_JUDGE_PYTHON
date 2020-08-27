let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let nums = (input.trim()).split(" ").map(Number);
nums.sort((a, b) => a - b);
let ans = "no"

if((nums[0] == nums[1] == nums[2] == nums[3]) || (nums[0] == nums[1] && nums[2] == nums[3])){
    ans = "yes"
}
console.log(ans)