12.27
# 1
print("Hello")

# 2
print("Hello","World")

# 3
print("Hello")
print("World") #  자동줄바꿈

# 4
print("'Hello'")

# 5
print('"Hello World"')

# 6
print('"!@#$%^&*()\'')

# 7
print('''"C:\Download\\'hello'.py"''')

# 8
print('print("Hello\\nWorld")')

# 9
c = input()
print(c)

# 10
n = input()
n = int(n)
print(n)

# 11
f = input()
f = float(f)
print(f)

# 12
a = input()
b = input()
a = int(a)
b = int(b)
print(a)
print(b)

# 13
a = input('')
b = input('')
print(b)
print(a)

# 14
a = float(input())
print(a)
print(a)
print(a)

#15
a, b = input().split() # 공백두고 인풋받기 (1 2)
print(a)
print(b)

# 16
a, b = input().split()
print(b, a)

# 17
a = input()
print(a,a,a)

# 18
a, b = input().split(':') # : 기준으로 자름 ( 입력예시) 9:12 )
print(a,b,sep=':') # :을 사이에 두고 a, b 출력

# 19
y, m, d = input().split('.')
print(d,m,y,sep='-')

# 20
num = input()
print(num.replace("-","")) # replace : 앞에꺼를 뒤에꺼로 바꾼다!

# 21
word = input()
for i in word: # 문자열을 넣으면 하나씩 i에 할당된다
    print(i)

# 22
date = input()
y = date[:2] # [a:b] -> a이상 b미만
m = date[2:4]
d = date[4:]
print(y,m,d)

# 23
h, m, s = input().split(':')
print(m)

# 24
w1, w2 = input().split()
print(w1 + w2)

# 25
a, b = input().split()
a = int(a)
b = int(b)
print(a + b)

# 26
a = input()
b = input()
a = float(a)
b = float(b)
sum = a + b
print(sum)

# 27
dec = int(input())
print('%x' %dec) # %x : 16진수, %o : 8진수

# 28
dec = int(input())
print('%X' %dec) # X가 대문자면 대문자로 출력

# 29
n = input()
hex = int(n, 16) # 16진수로 입력받기
print('%o' %hex)

#30
a = ord(input()) # ord : 문자의 아스키 코드 반환
print(a)

# 31
n = int(input())
print(chr(n)) # chr : 아스키코드 -> 문자

# 32
n = int(input())
print(-n)

# 33
n = ord(input())
print(chr(n+1))

# 34
a, b = input().split()
c = int(a) - int(b)
print(c)

# 35
a, b = input().split()
c = float(a) * float(b)
print(c)

12.28
# 36
word, n = input().split()
print(word * int(n))

# 37
n = input()
word = input()
print(int(n) * word)

# 38
a, n = input().split()
result = int(a) ** int(n)
print(result)

# 39
f1, f2 = input().split()
result = float(f1) ** float(f2)
print(result)

# 40
a, b = input().split()
c = int(a) // int(b) # // : 나눈 몫 계산
print(c)

# 41
a, b = input().split()
c = int(a) % int(b) # % : 나머지 계산
print(c)

# 42
f = float(input())
print(format(f, ".2f")) # 소수 두번째자리까지 반올림
# 3.1415 -> 3.14

# 43
f1, f2 = input().split()
result = float(f1) / float(f2)
print(format(result, ".3f"))

# 44
a, b = input().split()
a = int(a)
b = int(b)
add = a + b
sub = a - b
mul = a * b
quotient = a // b
remainder = a % b
div = a / b
print(add)
print(sub)
print(mul)
print(quotient)
print(remainder)
print(format(div, ".2f"))

# 45
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
sum = a + b + c
avg = sum / 3
print(sum, format(avg, ".2f"))

# 46
a = int(input())
n = a << 1
print(n)
1024 -> 2048

# 47
a, b = input().split()
n = int(a) << int(b)
print(n)

# 48
a, b = input().split()
a = int(a)
b = int(b)
if(a<b) :
    print("True")
else :
    print("False")

# 49
a, b = input().split()
a = int(a)
b = int(b)
if(a==b):
    print("True")
else:
    print("False")

# 50
a, b = input().split()
a = int(a)
b = int(b)
if(a<=b):
    print("True")
else:
    print("False")

# 51
a, b = input().split()
a = int(a)
b = int(b)
if(a!=b):
    print("True")
else:
    print("False")

# 52
n = int(input())
print(bool(n)) # 0 :  false

# 53
n = bool(int(input())) # input -> int -> bool 순으로 처리
print(not n) # 반대로 바꾸기 T -> F

# 54
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print(a and b) # and : 논리연산자(T/F) : 둘다 T일때 True

# 55
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print(a or b)

# 56
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print(a and (not b) or (not a) and b) # XOR 연산

# 57
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print((a and b) or (not a) and (not b))

# 58
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print((not a) and (not b))

# 59
n = int(input())
print(~n) # ~ : 반대로 0 -> 1로 변환

# 60
a, b = input().split()
n = int(a) & int(b) # & : 0과 1 계산 -> 0 1 : 0 / 1 1: 1
print(n)

12.30
61
a, b = input().split()
result = int(a) | int(b) # | : 0과 1 둘 중 하나가 1이면 1로 만들어준다
print(result)

62
a, b = input().split()
result = int(a) ^ int(b) # ^ : 1 1 이면 0
print(result)

63
a, b = input().split()
a = int(a)
b = int(b)
result = a if a > b else b # 3항연산 : 참 if 조건 else ~
print(result)

64
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
result = (a if a < b else b) if b < c else c
print(result)

65
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)

if a%2 == 0 :
    print(a)
if b%2 == 0 :
    print(b)
if c%2 == 0 :
    print(c)

66
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)

if a % 2 == 0 :
    print("even")
else :
    print("odd")
if b % 2 == 0 :
    print("even")
else :
    print("odd")
if c % 2 == 0 :
    print("even")
else :
    print("odd")

67
n = int(input())
if n < 0 :
    if n % 2 == 0 :
        print("A")
    else :
        print("B")
if n > 0 :
    if n % 2 == 0 :
        print("C")
    else :
        print("D")

68
n = int(input())

if n >= 90 :
    print("A")
elif n >= 70 : # elif = else if
    print("B")
elif n >= 40 :
    print("C")
elif n >= 0 :
    print("D")

69
word = input()
if word == "A" :
    print("best!!!")
elif word == "B" :
    print("good!!")
elif word == "C" :
    print("run!")
elif word == "D" :
    print("slowly~")
else :
    print("what?")

70
month = int(input())
if month // 3 == 1 :
    print("spring")
elif month // 3 == 2 :
    print("summer")
elif month // 3 == 3 :
    print("fall")
else :
    print("winter")

71
i = True
while(i):
    n = int(input())
    if n == 0:
        i = False
    else :
        print(n)

72 팩토리얼
n = int(input())

while(n > 0):
    print(n)
    n -= 1

73
n = int(input())
while(n > 0) :
    n -= 1
    print(n)

74 어렵.....
word = ord(input())
count = 0
while(count <= word - 97):
    print(chr(97 + count), end = ' ')
    count += 1

75
n = int(input())
for i in range(n+1): # range(5) : 0 ~ 4 까지
    print(i)

76
n = int(input())
for i in range(n+1): # range(5) : 0 ~ 4 까지
    print(i)

77
n = int(input())
sum = 0
for i in range(1, n+1):
    if i % 2 == 0:
        sum += i
print(sum)

78
w = ' '
while (w != 'q'):
    w = input()
    print(w)

79
n = int(input())
sum = 0
for i in range(0, n+1):
    sum += i
    if (sum >= n):
        print(i)
        break

80
n, m = input().split()
n = int(n)
m = int(m)
for i in range (1, n+1):
    for j in range(1, m+1):
        print(i, j)

81 16진수 구구단..........?
n = input()
for i in range(1, 15 + 1):
	print('%x*%x=%x'.upper() %(int(n, 16), int(hex(i), 16), (int(n, 16) * int(hex(i), 16))))
# 이건 모르곘따 ..

82 왜 잘못된 풀이로 나오는지 !!! 모르겠쑴...
n = int(input())
for i in range(1, n+1):
    if i % 3 == 0:
        print("X", end= ' ')
    else:
        print(i, end= ' ')
--------------- 답안 ----------------
n = int(input())

for i in range(1, n+1) :
  if i%10==3 or i%10==6 or i%10==9 : # 왜?.>?
    print("X", end=' ')
  else :
    print(i, end=' ')
------------------------------------
83
r, g, b = input().split()
r = int(r)
g = int(g)
b = int(b)
for i in range(0,r):
    for j in range(0,g):
        for k in range(0,b):
            print(i, j, k)
print(r*g*b)

84 흐음...
h, b, c, s = input().split()
h = int(h)
b = int(b)
c = int(c)
s = int(s)

print(round(h*b*c*s/8/1024/1024, 1), "MB") # round : 반올림 (n,1) : 소수점 한자리까지 표시(둘쨰에서 반올림)

85
r, g, b = input().split()
r = int(r)
g = int(g)
b = int(b)
res = r*g*b/8/1024/1024
print("%.2f"%res, "MB")

12.31
86
n = int(input())
s = 0
c = 0
while True:
    s += c # 1+2+3+...
    c += 1
    if s >= n:
        break
print(s)

87
n = int(input())

for i in range(1, n+1):
    if i % 3 == 0:
        continue
    else:
        print(i, end=' ')

88
a, d, n = input().split() # a:시작값, d:등차값, n:몇번째인지
a = int(a)
d = int(d)
n = int(n)

result = a + d * (n-1)
print(result)

89
a, r, n = input().split() # a:시작값, r:등비값, n:몇번째인지
a = int(a)
r = int(r)
n = int(n)

result = a * (r ** (n-1))
print(result)

90
a, m, d, n = input().split() # m:곱할값, d:더할값
a = int(a)
m = int(m)
d = int(d)
n = int(n)

for i in range(1, n):
    a = a * m + d
print(a)

91
a, b, c= input().split()
a = int(a)
b = int(b)
c = int(c)

day = 1
while day % a != 0 or day % b != 0 or day % c != 0: # a,b,c 모두 나머지가 0이 되는 수 : 최소공배수
    day += 1
print(day)

92
n = int(input()) # 몇명부를지
a = input().split() # 출석부르기

for i in range(n):
    a[i] = int(a[i]) # 정수변환

d = [] # 출석 몇번 불렸는지 들어갈 배열
for i in range(24): # 0~23
    d.append(0) # 배열에 0으로 채움

for i in range(n): # 번호 부를때마다 카운트증가 -> 이해가안대요
    d[a[i]] += 1

for i in range(1,24):
    print(d[i], end = ' ')

93
n = int(input())
a = input().split()

for i in range(n-1, -1, -1): # 시작, 끝, 증감 (시작수는 포함, 끝수는 포함안함)
    print(a[i], end=' ')

94
n = int(input())
a = input().split()

for i in range(n):
    a[i] = int(a[i])

min = a[0]
for i in range(0,n):
    if a[i] < min: # 기준값과 앞에서부터 하나씩 비교
        min = a[i]
print(min)

95
d = []
for i in range(20): # 전체 0으로 채우기
    d.append([])
    for j in range(20):
        d[i].append(0)

n = int(input())
for i in range(n):
    x, y = input().split()
    d[int(x)][int(y)] = 1 # 입력 받은 곳 1로 바꾸기

for i in range(1,20):
    for j in range(1,20):
        print(d[i][j], end=' ')
    print() # 줄바꿈

96 문제부터 이해가 안된다.................랄ㄹ라라라라라
d = []
for i in range(20):
    d.append([])
    for j in range(20):
        d[i].append(0)

for i in range(19):
    a = input().split()
    for j in range(19):
        d[i+1][j+1] = int(a[j])

n = int(input())
for i in range(n):
    x, y = input().split()
    x = int(x)
    y = int(y)
    for j in range(1,20):
        if d[j][y] == 0:
            d[j][y]=1
        else:
            d[j][y]=0
        if d[x][j] == 0:
            d[x][j] = 1
        else:
            d[x][j]=0

for i in range(1,20):
    for j in range(1,20):
        print(d[i][j], end=' ')
    print()

97
w, h = input().split() # 가로 세로
w = int(w)
h = int(h)

a = []
for i in range(w+1):
    a.append([])
    for j in range(h+1):
        a[i].append(0)

n = int(input()) # 놓을 수 있는 막대 갯수
for i in range(n):
    l, d, x, y = input().split()  # 길이, 방향, 좌표
    l = int(l)
    d = int(d) # 방향(d) = 0 아니면 1
    x = int(x)
    y = int(y)
    if d == 0: # 가로방향
        for j in range(l):
            a[x][y+j] = 1 # 가려진 부분 다 1로 채우기
    else : # 세로방향
        for j in range(l):
            a[x+j][y] = 1
for i in range(1, w+1) :
    for j in range(1, h+1):
        print(a[i][j], end=' ')
    print()

98 어렵다 어려워
m = []
for i in range(12):
    m.append([])
    for j in range(12):
        m[i].append(0)

for i in range(10):
    a = input().split()
    for j in range(10):
        m[i+1][j+1] = int(a[j])

x = 2
y = 2
while True:
    if m[x][y] == 0:
        m[x][y] = 9
    elif m[x][y] == 2:
        m[x][y] = 9
        break
    if (m[x][y+1]==1 and m[x+1][y]==1) or (x==9 and y==9):
        break

    if m[x][y+1] != 1:
        y += 1
    elif m[x+1][y] != 1:
        x += 1

for i in range(1,11):
    for j in range(1,11):
        print(m[i][j], end=' ')
    print()
