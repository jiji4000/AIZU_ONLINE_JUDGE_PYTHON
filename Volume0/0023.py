import math

n = int(input())
for i in range(0,n):
    x1,y1,r1,x2,y2,r2 = (float(x) for x in input().split())
    ans = 1
    # Bが Aの中にあるとき2、
    # AがBの中にあるとき-2、
    # AとBが共有点をもつとき1、
    # AとBが重なっていないとき0
    # 円の中心からの距離
    l = math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
    if l < abs(r1 - r2):
        if r1 > r2:
            ans = 2
        elif r2 > r1:
            ans = -2
    if l > r1 + r2:
        ans = 0
    print(ans)