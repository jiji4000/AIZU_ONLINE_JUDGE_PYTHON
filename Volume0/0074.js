// 参考:http://judge.u-aizu.ac.jp/onlinejudge/review.jsp?rid=1229901#1
// なんで正解でないのかと思っていたら、問題を取り違えていた
function hms(n){
    var s = n % 60
    var m = (n % 3600 - s) / 60
    var h = Math.floor(n / 3600)
    if(s < 10)s = "0" + s
    if(m < 10)m = "0" + m
    if(h < 10)h = "0" + h
    return [h,m,s].join(":")
  }
  
  var input = require('fs').readFileSync('/dev/stdin', 'utf8')
  var Arr=(input.trim()).split("\n")
  
  for(var i = 0;i<Arr.length - 1;++i){
    let [h,m,s] =Arr[i].split(" ").map(Number);
    let time = (7200) - (h * 3600) - (m * 60) - s;
    console.log(hms(time));
    console.log(hms(time*3));
  }