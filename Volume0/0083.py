while True:
    try:
        y, m, d = (int(x) for x in input().split())
        ymd = 10000 * y + 100 * m + d
        ans = "heisei" + " " + str(y - 1988) + " " + str(m) + " " + str(d)
        if ymd < 18680908:
            ans = "pre-meiji"
        elif ymd < 19120730:
            ans = "meiji" + " " + str(y - 1867) + " " + str(m) + " " + str(d)
        elif ymd < 19261225:
            ans = "taisho" + " " + str(y - 1911) + " " + str(m) + " " + str(d)
        elif ymd < 19890108:
            ans = "showa" + " " + str(y - 1925) + " " + str(m) + " " + str(d)
        print(ans)
    except:
        break