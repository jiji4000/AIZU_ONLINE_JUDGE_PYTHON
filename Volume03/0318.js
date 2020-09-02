Set.prototype.union = function(setB) {
    var union = new Set(this)
    for (var elem of setB) {
        union.add(elem)
    }
    return union
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set()
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem)
        }
    }
    return intersection
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this)
    for (var elem of setB) {
        difference.delete(elem)
    }
    return difference
}

let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let Arr = (input.trim()).split("\n")
let n = Arr[0]
let p = []
for(var i = 1;i <= n;++i){
    p.push(i)
}
p = new Set(p)

let a = Arr[1].split(" ").map(Number)
a.shift()
a = new Set(a)

let b = Arr[2].split(" ").map(Number)
b.shift()
b = new Set(b)

let c = Arr[3].split(" ").map(Number)
c.shift()
c = new Set(c)

let na = p.difference(a)
let aa = na.intersection(c)
let bb = b.intersection(c)
let ans = aa.union(bb)
console.log(ans.size)