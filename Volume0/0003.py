while True:
    try:
        num = int(input())
        for i in range(num):
            lengths = (int(x) for x in input().split())
            sortLengths = sorted(lengths)
            
            if(sortLengths[2] * sortLengths[2] == (sortLengths[1] * sortLengths[1]) + (sortLengths[0] * sortLengths[0])):
                print("YES")
            else:
                print("NO")
    except EOFError:
        break
