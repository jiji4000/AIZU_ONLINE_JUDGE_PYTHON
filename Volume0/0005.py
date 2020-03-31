def gcd(x,y):
    return gcd(y,x % y) if y > 0 else x

def lcm(a, b):
    return ((a*b) // gcd(a,b))

while(1):
    try:
        x,y = (int(x) for x in input().split())
        print(gcd(x,y),lcm(x,y))
    except:
        break