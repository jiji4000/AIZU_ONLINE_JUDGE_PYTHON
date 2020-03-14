import math

x = y = 0
# 初めは90から
totalAngle = 90
while(1):
    try:
        num,angle = (int(x) for x in input().split(","))
        if num == 0:break
        rad = math.radians(totalAngle)
        y += math.sin(rad) * num
        x += math.cos(rad) * num
        # 右周り+だから-になる
        totalAngle -= angle
    except EOFError:
        break
print(int(x))
print(int(y))