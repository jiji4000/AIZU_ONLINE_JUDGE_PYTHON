while 1:
    n = int(input())
    if n == 0:
        break
    dic = dict()
    for i in range(0,n):
        w1,w2 = input().split()
        dic[w1] = w2
    n = int(input())
    s = ""
    for i in range(0,n):
        w = input()[0]
        if dic.get(w) != None:
            s += dic.get(w)
        else:
            s += w
    print(s)