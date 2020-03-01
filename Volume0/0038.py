words = [['null','one pair','three card','four card'], ['','','two pair','full house']]

while True:
    try:
        cards = list(int(x) for x in input().split(","))
        cards = sorted(cards,reverse=False)
        isStright = True
        pairCard = -1
        pairNum = 0
        pairIndex = 0
        
        tmp = cards[0]
        for i in range(1,5):
            if tmp + 1 != cards[i]:
                isStright = False
            if tmp == cards[i]:
                if pairNum >= 1 and pairCard != cards[i]:
                    pairIndex = 1
                pairNum += 1
                pairCard = cards[i]
            tmp = cards[i]
                
        if isStright or (cards[0] == 1 and cards[1] == 10 and cards[2] == 11 and cards[3] == 12 and cards[4] == 13):
            ans = "straight"
        else:
            ans = words[pairIndex][pairNum]
        print(ans)
    except:
        break