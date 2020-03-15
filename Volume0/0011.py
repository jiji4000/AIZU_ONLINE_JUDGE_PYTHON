table = [(0,0)] * 31
dp = [0] * 31

w = int(input())
h = int(input())
for i in range(1,h + 1):
    a,b = (int(_) for _ in input().split(","))
    table[i] = (a,b)

# あみだくじ
for i in range(1,w + 1):
    dest = i
    for j in range(1,h + 1):
        if table[j][0] == dest:
            dest = table[j][1]
        elif table[j][1] == dest:
            dest = table[j][0]
    dp[dest] = i    
    
for i in range(1,w + 1):
    print(dp[i])