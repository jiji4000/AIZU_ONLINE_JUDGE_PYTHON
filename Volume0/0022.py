while 1:
    try:
        n = int(input())
    except:break
    
    if(n == 0):break

    sum = 0
    arr = []
    isPlus = True
    maxValue = -100000
    for i in range (n):
        try:
            arr.append(int(input()))  
        except:break
        
        # 最初から-が続いていた場合は、意味がないので無視
        if arr[i] < 0:
            if sum > 0:
                # plusが連続して続いていた場合
                if(isPlus):
                    # それまでの合計値を保存する
                    maxValue = max(maxValue,sum)
                    isPlus = False
                sum += arr[i]
                if sum < 0 :
                    sum = 0
        else :
            sum += arr[i]
            isPlus = True
    if sum != 0 :
        maxValue = max(maxValue,sum)
    # 全てminusなので、入力値から最小のものを探す    
    else :
        for i in arr:
            maxValue = max(maxValue,i)
    print(maxValue)