while True:
    try:
        a = list(int(x) for x in input().split())
        b = list(int(x) for x in input().split())
    except EOFError:
        break
    hit = 0
    brow = 0
    for i in range(4):
        if a[i] == b[i]:
            hit += 1
        else:
            for j in range(4):
                if(i != j and a[i] == b[j]):
                    brow += 1
                    
    print(str(hit) + " " + str(brow))
