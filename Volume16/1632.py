scores = [[0] * 51 for i in range(1001)]

while(1):
    try:
        n,m = (int(x) for x in input().split())
        if n == 0:break
        for i in range(0,m):
            scores[i] = list(int(x) for x in input().split())
            
        maxSum = 0
        for i in range(0,n):
            sum = 0
            for j in range(0,m):
                sum += scores[j][i]
            maxSum = max(maxSum,sum)
        print(maxSum)
    except:
        break