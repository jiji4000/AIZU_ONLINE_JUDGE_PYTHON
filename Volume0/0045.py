from decimal import *
sum = 0
cnt = 0
nums = 0
while 1:
    try:
        price, num = (int(x) for x in input().split(','))
        sum += price * num
        cnt += 1
        nums += num
    except EOFError:
        break

print(sum)
nums = Decimal(nums / cnt).quantize(Decimal('0'), rounding=ROUND_HALF_UP)
print(nums)