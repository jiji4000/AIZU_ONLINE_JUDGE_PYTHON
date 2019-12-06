while 1:
    try:
        n = int(input())
    except:break
    
    if(n == 0):break

    sum = 0
    isPlus = True
    maxValue = -100000
    for i in range (n):
        try:
            num = int(input())
            maxValue = max(maxValue,num)
        except:break
        
        # 最初から-が続いていた場合は、意味がないので無視
        if num < 0 and sum > 0:
            # plusが連続して続いていた場合
            if(isPlus):
                # それまでの合計値を保存する
                maxValue = max(maxValue,sum)
                isPlus = False
            sum += num
        # plusの場合
        elif(num > 0):
            if(sum < 0) :
                sum = 0
            sum += num
            isPlus = True
    if sum != 0 :
        maxValue = max(maxValue,sum)
    print(maxValue)