while(1):
    n = int(input())
    if n == 0:
        break
    t = [[0] * (n + 1) for i in range(n + 1)]
    m = []
    for i in range(0,n):
        m.append(list(int(x) for x in input().split(" ")))
    sum = 0
    for i in range(0,n):
        sum1 = 0
        sum2 = 0
        for j in range(0,n):
            t[i][j] = m[i][j]
            sum1 += m[i][j]
            sum2 += m[j][i]
        t[i][n] = sum1
        t[n][i] = sum2
        sum += sum1
    t[n][n] = sum
    
    
    for i in range(0,n + 1):
        for j in range(0,n + 1):
            print("%5d" %(t[i][j]),end="")
        print()