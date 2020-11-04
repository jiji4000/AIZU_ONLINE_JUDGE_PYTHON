let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr=(input.trim()).split("\n").map(Number);

for(var i = 0;i < Arr.length - 1;++i){
  let n = Arr[i]
  let t = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let x = parseInt(n / 2)
  let y = x + 1
  let num = 2
  t[y][x] = ("   " + 1).slice(-4)
  x++
  y++
  //   中央のマス目のちょうど一つ下のマス目に１を入れる。
// 2.次の数字を右斜め下のマス目に入れる。
// ただし、数字を入れようとしたマス目が正方形からはみ出している場合、すでに数字が埋まっている場合は以下の方法に従って数字を入れるマス目を探す。
// 1.右にはみ出した場合には、同じ行の左はしに、左にはみ出した場合には、同じ行の右はしに、下にはみ出した場合には、同じ列の一番上に数字を入れる。
// 2.数字を入れようとしたマス目が埋まっているときには、その埋まっているマス目の左斜め下のマス目に入れる。
// 全てのマス目が埋まるまで２を繰り返す。
  while(num <= n * n){
      // 左にはみ出した場合同じ行の左はし
      if(x < 0){
          x = n - 1
      }
      else if(x > n - 1){
        x = 0          
      }
      else if(y > n - 1){
          y = 0
      }
      // 埋まっている場合左下に入れる
      else if(t[y][x] != 0){
          x -= 1
          y += 1
      }
      else{
          //t[y][x] = num
          t[y][x] = ("   " + num).slice(-4)
          num++
          x++
          y++
      }
  }
  // by miraikako san
  console.log(t.join("\n").replace(/\,/g,""));
}
