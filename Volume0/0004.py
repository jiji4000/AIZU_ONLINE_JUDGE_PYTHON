while True:
    try:
        a,b,c,d,e,f = (float(x) for x in input().split())
        x = (c * e - b * f) / (a * e - b * d)
        y = (c * d - a * f) / (b * d - a * e)
        
        if x == 0: x = 0
        if y == 0: y = 0
        print(format(x, ".3f"), format(y, ".3f"))
    except EOFError:
        break