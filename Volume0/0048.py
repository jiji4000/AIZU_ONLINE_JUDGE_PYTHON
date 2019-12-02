a,b=['light fly', 'fly', 'bantam', 'feather', 'light', 'light welter','welter', 'light middle', 'middle', 'light heavy', 'heavy'],[48, 51, 54, 57, 60, 64, 69, 75, 81, 91]
while 1:
    try:
        c = float(input())
    except:break
    for i in range(10):
        if c <= b[i]:
            print(a[i])
            break
    else: print(a[10])