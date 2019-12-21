import math

class Circle:
    def __init__(self,x,y,r):
        self.x = x
        self.y = y
        self.r = r

def getCircle(x1, y1, x2, y2, x3, y3):
    d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))
    px = ((x1**2 + y1**2) * (y2 - y3) + (x2**2 + y2**2) * (y3 - y1) + (x3**2 + y3**2) * (y1 - y2) ) / d
    py = ((x1**2 + y1**2) * (x3 - x2) + (x2**2 + y2**2) * (x1 - x3) + (x3**2 + y3**2) * (x2 - x1) ) / d
    a = math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
    b = math.sqrt((x1 - x3)**2 + (y1 - y3)**2)
    c = math.sqrt((x2 - x3)**2 + (y2 - y3)**2)
    s = (a + b + c) / 2
    A = math.sqrt(s * (s - a) * (s - b) * (s - c))
    r = a * b * c / (4 * A)
    return Circle(px,py,r)

          
n = int(input())
for k in range(n):
    x1, y1, x2, y2, x3, y3 = [float(x) for x in input().split()]
    circle = getCircle(x1, y1, x2, y2, x3, y3)
    print("%.3f %.3f %.3f" % (circle.x, circle.y, circle.r))