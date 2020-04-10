let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a,t,r] = (input.trim()).split(" ");
let k = t / a;
console.log(k * r);
