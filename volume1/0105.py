dic = {}

while(1):
    try:
        key,word = (x for x in input().split())
        dic.setdefault(key, [])
        dic[key].append(word)
    except:
        break

for k in sorted(dic.keys()):
    print(k)
    arr = sorted(dic[k],key=int)
    for i in range(0,len(arr)):
        if i != 0:
            print(" ",end="")
        print(arr[i],end="")
    print()
