while True:
    try:
        str = input()
        ans = ''
        # flag
        n = 1
        
        for c in str:
            if '@' == c:
                n = 0
            elif n < 1:
                n = int(c)
            else:
                ans += c * n
                n = 1
        print(ans)
    except:
        break
        
# import sys