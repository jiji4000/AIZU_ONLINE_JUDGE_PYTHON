while True:
    try:
        num = int(input())
        if num == 0 :
            break
        f = 1
        ans = 0
        for i in range(num,1,-1):
            f *= i
        s = str(f)
        for i in reversed(range(0, len(s))): 
            if s[i] in '0':
                ans += 1
            else :
                break;
        print(ans)
    except EOFError:
        break