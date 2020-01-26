# 一番小さい値と大きい値を比べるその値と一致していたら、他の数値で試す
def getLCM(num1,num2):
    base1 = num1
    base2 = num2
    while 1:
        if num1 < num2:
            num1 =  num1 + base1
        elif num1 > num2:
            num2 =  num2 + base2
        elif num1 == num2:
            return num1

def getNextLCM(base1,base2,lcm):
    num1 = lcm + base1
    num2 = lcm
    while 1:
        if num1 < num2:
            num1 =  num1 + base1
        elif num1 > num2:
            num2 =  num2 + base2
        elif num1 == num2:
            return num1
while 1:
    try:
        n = int(input())
        numbers = list(int(x) for x in input().split())
    except:break
    
    # 1があったら消す
    if 1 in numbers:
        numbers.remove(1)
    numbers = sorted(numbers)
    reduceIndex = []
    size = len(numbers) - 1
    
    # for i in numbers:
    #     print(str(i) + " ",end="")
    # print()
    
    # 割れたらその数を消す
    while(size > 1):
        isReduce = False
        
        for i in range(size - 1,-1,-1) :
            if numbers[size] % numbers[i] == 0:
                reduceIndex.append(numbers[i])
                isReduce = True
        for i in reduceIndex:
            numbers.remove(i)
        if isReduce:
            size = len(numbers) - 1
            reduceIndex.clear()
        else:
            size = size - 1
            
    # for i in numbers:
    #     print(str(i) + " ",end="")
    # print()
    
    size = len(numbers)
    if size == 1:
        print(numbers[size - 1])
        break
    
    lcm = getLCM(numbers[size - 1],numbers[size - 2])
    
    while(1):
        isFind = True
        for i in range(size - 2,-1,-1):
            # print(i)
            # print(lcm % numbers[i])
            if lcm % numbers[i] != 0:
                i = -1
                isFind = False
 
        if isFind:
            break
        else:
            lcm = getNextLCM(numbers[size - 2],numbers[size - 1],lcm)
    print(lcm)