# coding:utf-8

def solve(num, l):
  if num == 0:
    return l

  l.append(num % 2)
  return solve(num // 2, l)

while True:
  try:
    num = int(input())
    nums = solve(num, [])
    ans = ""
    for i, v in enumerate(nums):
      if v:
        ans += str(2 ** i) + " "
    print(ans.rstrip())

  except EOFError:
    break
