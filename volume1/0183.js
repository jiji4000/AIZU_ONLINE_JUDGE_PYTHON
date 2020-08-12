var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
let s = ["","",""]

function isMatch(s1,s2){
    if(s1 != s2 || s1 == "+") return false
    return true
}

function search(s){
        // 斜め
    let t = s[0][0]
    for(var i = 1;i < 3;++i){
        if(!isMatch(t,s[i][i])) break
        if(i == 2) return t
    }
    t = s[2][0]
    for(var i = 1;i < 3;++i){
        if(!isMatch(t,s[2 - i][i])) break
        if(i == 2) return t
    }
    
    // 横
    for(var i = 0;i < 3;++i){
        t = s[i][0]
        
        for(var j = 1;j < 3;++j){
            if(!isMatch(t,s[i][j])) break
            if(j == 2) return t
        }
    }
    // 縦
    for(var i = 0;i < 3;++i){
        t = s[0][i]
        for(var j = 1;j < 3;++j){
            if(!isMatch(t,s[j][i])) break
            if(j == 2) return t
        }
    }
    return "NA"
}

while(1){
    for(var i = 0;i < 3;++i){
        s[i] = Arr.shift()
    }
    if(s[0] == "0"){
        break
    }
    console.log(search(s))
}