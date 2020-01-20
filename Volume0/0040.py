def affine(word, alpha, beta):
    word = list(word)
    for i in range(len(word)):
        ascii = ((ord(word[i]) - ord('a')) * alpha + beta) % 26;
        word[i] = chr(ascii + ord('a'));
    return ''.join(word)
    
alphas = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]

for x in range(int(input())):
    words = input().split(' ')
    for alpha in range(26):
        for beta in range(26):
            string = list(map(lambda x: affine(x, alpha, beta), words))
            if 'that' in string or 'this' in string:
                print(*string)
                break
        else:
            continue
        break