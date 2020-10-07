while 1:
	try:
		a, b, n = list(map(int, input().split()))
	except:
		break
	ans = 0
	a %= b
	for i in range(n):
		if a == 0: break
		a *= 10
		ans += a // b
		a %= b
	print(ans)