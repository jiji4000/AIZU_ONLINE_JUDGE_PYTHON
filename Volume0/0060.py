while 1:
    try:
        d = list(int(_) for _ in input().split())
        s = d[0] + d[1]
        p = 0
        ans = "NO"
        for i in range(1,11):
            if i != d[0] and i != d[1] and i != d[2]:
                if s + i <= 20:
                    p += 1
        if p / 7 >= 0.5:
            ans = "YES"                
        print(ans)
    except:
        break