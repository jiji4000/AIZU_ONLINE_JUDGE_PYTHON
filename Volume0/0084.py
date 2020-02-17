s = input().replace(",", " ").replace(".", " ")
print(*[s for s in s.split() if 3 <= len(s) <= 6])