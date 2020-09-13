ans = ""
n = int(input())

while 1:
    if n % 3 == 0:
        ans = "0" + ans
    elif n % 3 == 1:
        ans = "+" + ans
    else:
        ans = "-" + ans
        n += 1
    n //= 3
    if n == 0:break
print(ans)