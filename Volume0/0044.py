import math

isPrime = [True] * 60001
primes = []
def eratos(n):
    isPrime[0] = isPrime[1] = False
    for i in range(2,int(math.sqrt(n))):
        if isPrime[i]:
            j = 2 * i
            while j <= n:
                isPrime[j] = False
                j = j + i
    for i in range(2,60000):
        if isPrime[i]:
            primes.append(i)
eratos(60000)

while True:
    try:
        p = int(input())
        min = list(filter(lambda x: x < p,primes))
        max = list(filter(lambda x: x > p,primes))
        print(min[-1],max[0])
    except:
        break