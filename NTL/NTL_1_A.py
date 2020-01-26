def isPrime(x):
    if x < 2:
        return False
    elif x == 2:
        return True;
    if x % 2 == 0:
        return False
    
    for i in range(3,int(x),2):
        if i * i > x :
            break;
        if x % i == 0:
            return False
        
    return True
    

while 1:
    try:
        num = (int)(input())
    except EOFError:
        break
print(str(num) + ":",end="")
factor = 2
factors = []
while num != 1:
    # 素数チェック
    if isPrime(num) :
        factors.append(int(num))
        break
    if(num % factor == 0):
        num = num / factor
        factors.append(factor)
    else:
        factor = factor + 1


for i in factors:
    print(" " + str(i),end="")
print()