n,m,q = map(int, input().split())
arr = list(range(n))
i = 0

for a in map(int, input().split()):
    i += -a if (a % 2 != 0) else a
    i %= n
    arr.pop(i)
    n -= 1
    
for q in map(int, input().split()):
    print(int(q in arr))