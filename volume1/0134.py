import math

n = int(input())
s = 0
for i in range(n):
    s += int(input())
print(math.floor(s / n))