import re
ans = 0
while True:
    try: s = input()
    except: break
    for i in re.findall('\d+',s): ans += int(i)
print(ans)