def getIndex(n):
    i = 6
    if n < 165:
        i = 1
    elif n >= 165 and n < 170:
        i = 2
    elif n >= 170 and n < 175:
        i = 3
    elif n >= 175 and n < 180:
        i = 4
    elif n >= 180 and n < 185:
        i = 5
    return i

nums = [0] * 7
n = int(input())

for i in range(0,n):
    h = float(input())
    nums[getIndex(h)] += 1

for i in range(1,len(nums)):
    ans = str(i) + ":"
    for j in range(0,nums[i]):
        ans += "*"
    print(ans)