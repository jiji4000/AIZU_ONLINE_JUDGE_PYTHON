while 1:
  try:
    d = int(input())
    sum = 0
    for i in range(d,600,d):
      sum += d * i * i
    print(s)
  except EOFError:
    break