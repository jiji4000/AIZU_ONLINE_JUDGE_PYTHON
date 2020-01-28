ans = 0
while 1:
    try:
        s = input()
    except:break
    if(s == s.reverse()):
        s += 1
print(s)