dp=[[""] * 100 for i in range(100)]

while(1):
    try:
        h,w = (int(x) for x in input().split())
        if w == 0:
            break
        s = ""
        x = y = 0
        ans = "LOOP"
        for i in range(0,h):
            s += input()
        for i in range(0,h):
            for j in range(0,w):
                dp[i][j] = s[i * w + j]

        while(1):
            c = dp[y][x]
            dp[y][x] = 'd'
            if(c == '>'):
                x += 1
            if(c == 'v'):
                y += 1
            if(c == '^'):
                y -= 1
            if(c == '<'):
                x -= 1
            if(c == 'd'):
                break;
            if(c == '.'):
                ans = str(x)+ ' ' + str(y)
                break
        print(ans)
    except EOFError:
        break