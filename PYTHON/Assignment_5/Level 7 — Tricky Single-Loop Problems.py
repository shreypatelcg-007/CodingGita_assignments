# Question 53

n = int(input("Enter number: "))
temp = n

largest = -1
second = -1

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit > largest:
            second = largest
            largest = digit
        elif digit > second and digit != largest:
            second = digit

        temp = temp // 10

print(second)

# Output for 58321
# 5
#
# Output for 987654
# 8
#
# Output for 99852
# 8


# Question 54

text = input("Enter string: ")

current = 0
best = 0
previous = ""

for ch in text:
    if ch == previous:
        current = current + 1
    else:
        current = 1
        previous = ch

    if current > best:
        best = current

print(best)

# Output for aaabbccccd
# 4
#
# Output for programming
# 2
#
# Output for abcde
# 1


# Question 55

text = input("Enter string: ")
target = input("Enter target character: ")

count = 0
total = 0

for ch in text:
    total = total + 1

    if ch == target:
        count = count + 1

frequency = count / total * 100

print("Count =", count)
print("Frequency =", round(frequency, 2), "%")

# Output for banana, a
# Count = 3
# Frequency = 50.0 %
#
# Output for programming, g
# Count = 2
# Frequency = 18.18 %


# Question 56

n = int(input("Enter number: "))
temp = n
total = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10
        total = total + digit
        print(total)
        temp = temp // 10

# Output for 58321
# 1
# 3
# 6
# 14
# 19


# Question 57

n = int(input("Enter number: "))
temp = n
even = 0
odd = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit % 2 == 0:
            even = even + 1
        else:
            odd = odd + 1

        temp = temp // 10

if even > odd:
    print("More Even Digits")
elif odd > even:
    print("More Odd Digits")
else:
    print("Equal")

# Output for 24681
# More Even Digits
#
# Output for 13579
# More Odd Digits
#
# Output for 1234
# Equal


# Question 58

n = int(input("Enter number: "))
temp = n
total = 0
position = 1

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if position % 2 == 1:
            total = total + digit
        else:
            total = total - digit

        position = position + 1
        temp = temp // 10

print(total)

# Output for 12345
# 3
#
# Output for 58321
# -1
#
# Output for 2468
# 4


# Question 59
# Direct Output

# 2
# 6
# 12
# 20
# 30


# Question 60
# Direct Output

# 5

# Explanation:
# Even numbers from 1 to 10 are:
# 2, 4, 6, 8, 10
# Therefore count = 5.


# Question 61

total = 0

for i in range(1, 6):
    total = total + i

print(total)

# Output
# 15
