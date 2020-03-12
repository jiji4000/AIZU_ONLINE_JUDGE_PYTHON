heights = []

for i in range(0,10):
    heights.append(int(input()))
heights.sort(reverse=True)
for i in range(0,3):
    print(heights[i])