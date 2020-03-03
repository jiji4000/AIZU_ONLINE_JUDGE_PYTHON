while True:
    try:
        n = int(input())
        dept = 100000
        for i in range(0,n):
            dept += dept * 0.05
            round = dept % 1000
            if round > 0:
                dept += 1000 - round
        print(int(dept))
    except:
        break