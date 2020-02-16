import math

isPrime = [True] * 110001
primes = []
def eratos(n):
    isPrime[0] = isPrime[1] = False
    for i in range(2,int(math.sqrt(n))):
        if isPrime[i]:
            j = 2 * i
            while j <= n:
                isPrime[j] = False
                j = j + i
    for i in range(2,110000):
        if isPrime[i]:
            primes.append(i)
eratos(110000)

while True:
    try:
        p = int(input())
        if p == 0:
            break
        ans = 0
        for i in range(0,p):
            ans += primes[i]
        print(ans)
    except:
        break