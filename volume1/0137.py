n = int(input())

for i in range(n):
    print("Case " + str(i + 1) + ":")
    num = int(input())
    for j in range(0,10):
        # 2乗
        num *= num
        sn = str(num)
        # 8桁にする
        if len(sn) < 8:
            d = 8 - len(sn)
            for k in range(d):
                sn = "0" + sn
        # 中央から値を取り出す
        num = int(sn[2:6])
        print(num)