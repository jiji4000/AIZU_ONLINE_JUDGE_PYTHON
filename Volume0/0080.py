def cubeRoot(q):
    x = q / 2
    while abs(x ** 3 - q) >= (0.00001 * q):
        x = (2 * x ** 3 + q) / (3 * x ** 2)
    return x
    
while True:
  q = int(input())
  if q == -1:
    break
  print(cubeRoot(q))