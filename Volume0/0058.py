import sys

while True:
    try:
        x1,y1,x2,y2,x3,y3,x4,y4 = (float(x) for x in input().split(" "))
        ans = "NO"
        if x1 == x2:
            if y3 == y4:
                ans = "YES"
        else:
            if x3 == x4:
                if y1 == y2:
                    ans = "YES"
            else:
                k1 = (y2 - y1) / (x2 - x1)
                k2 = (y4 - y3) / (x4 - x3)
                if(abs((k1 * k2) + 1) < 1e-10):
                    ans = "YES"
        print(ans)
    except:
        break