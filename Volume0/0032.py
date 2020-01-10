rectangle = 0
parallelogram = 0

while True:
    try:
        a,b,d = (int(x) for x in input().split(","))
        if d * d == (a * a) + (b * b):
            rectangle += 1
        elif a == b:
            parallelogram += 1
    except EOFError:
        break
print(rectangle)
print(parallelogram)
