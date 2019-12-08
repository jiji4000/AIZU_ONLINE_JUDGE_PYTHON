while 1:
    try:
        n = int(input())
    except:break
    ans = (0.5 * n * n) + (0.5 * n) + 1        
    print(round(ans))