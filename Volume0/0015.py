while 1:
    try:
        n = int(input())
    except:break

    n1 = 0
    n2 = 0
    for i in range(n):
        n1 = int(input())
        n2 = int(input())
        isOver = False
        ans = n1 + n2
        if len(str(ans)) >= 81 | len(str(n1)) | len(str(n1)) :
            isOver = True
        if isOver:
            print("overflow")
        else:
            print(ans)