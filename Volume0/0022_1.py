while 1:
    try:
        n = int(input())
    except:break
    
    if(n == 0):break

    sum = 0
    isPlus = True
    isPush = False
    maxValue = -100000
    for i in range (n):
        try:
            num = int(input())
            maxValue = max(maxValue,num)
        except:break
        
        # 最初から-が続いていた場合は、意味がないので無視
        if num < 0 and isPush:
            # plusが連続して続いていた場合
            if(isPlus):
                # それまでの合計値を保存する
                maxValue = max(maxValue,sum)
                isPlus = False
                sum += num
            # minusが続いていた場合
            else:
                sum += num
        # plusの場合
        elif(num > 0):
            # plusが続いていた場合
            if(isPlus):
                isPush = True
                sum += num
            else:
                if (sum + num < 0):
                    sum = 0
                isPlus = True
                sum += num
    if isPush :
        maxValue = max(maxValue,sum)
    print(maxValue)