sum = []
while 1:
    try:
        num, blood = (str(x) for x in input().split(','))
        index = 0
        if(blood == "B"){
            index = 1;
        }
        else if(blood = "AB"){
            index = 2;
        }
        else if(blood = "O"){
            index = 3;
        }
        sum[index] += 1
    except EOFError:
        break

for i in sum :
    print(sum[i])