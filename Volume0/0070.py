max = 0
for i in range(1,10):
    max += i * (i + 1)

dp=[[[-1] * 1025 for i in range(max + 1)] for j in range(11)]

def solve(n,s,used):
    if n == 0 and s == 0:
        return 1;
    if n <= 0 or s < 0:
        return 0
    if dp[n][s][used] != -1:
        return dp[n][s][used]
        
    sum = 0
    for i in range(0,10):
        if (used >> i) % 2 == 0:
            used += 1 << i
            sum += solve(n - 1,s - i * n,used)
            used -= 1 << i
    dp[n][s][used] = sum        
    return sum

while(1):
    try:
        n,s = (int(x) for x in input().split())
        ans = 0
        if s >= 0 and s <= max:
            used = 0
            ans = solve(n,s,used)
        print(ans)
    except:
        break