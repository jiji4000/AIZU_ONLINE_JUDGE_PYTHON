while True:
    try:
        a1 = float(input())
        ans = beforeNum = a1
        for i in range(2,11):
            if i % 2 == 0:
                beforeNum *= 2
            else:
                beforeNum /= 3
            ans += beforeNum             
        print(ans)
    except:
        break