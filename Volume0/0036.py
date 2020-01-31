def ans(sr, sc, tbl):
	if 4 in sr: return 'C'
	if 4 in sc: return 'B'
	if 1 in sr: return 'F' if tbl[sr.index(1)][sc.index(2)] == 1 else 'D'
	if 1 in sc: return 'E' if tbl[sr.index(2)][sc.index(1)] == 1 else 'G'
	return 'A'
	
tbl = [[] for i in range(8)]
sr, sc = [0]*8, [0]*8
while True:
	for r in range(8): tbl[r] = list(map(int, input()))
	# 行の総数
	for i in range(8): sr[i] = sum(tbl[i])
	# 列の総数
	for i in range(8): sc[i] = sum([tbl[r][i] for r in range(8)])
	print(ans(sr, sc, tbl))
	try: input()
	except: break