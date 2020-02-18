while True:
    try:
        s,w,h = (float(x) for x in input().split(","))
        bmi = w / (h * h)
        if bmi >= 25:
            print(int(s))
    except:
        break