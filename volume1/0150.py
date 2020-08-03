import math

isPrime = [True] * 10001
primes = []
def eratos(n):
    isPrime[0] = isPrime[1] = False
    for i in range(2,int(math.sqrt(n))):
        if isPrime[i]:
            j = 2 * i
            while j <= n:
                isPrime[j] = False
                j = j + i
    for i in range(2,10000):
        if isPrime[i]:
            primes.append(i)
eratos(10000)

while True:
    try:
        n = int(input())
        if n == 0:
            break
        for i in range(n,2,-1):
            if isPrime[i]:
                if isPrime[i - 2]:
                    print(i - 2,i)
                    break
    except EOFError:
        break
            
        
    