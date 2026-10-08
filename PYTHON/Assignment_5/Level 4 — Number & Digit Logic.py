
# Question 23

n = int(input("Enter number: "))
temp = n
count = 0

for i in range(n):
    if temp > 0:
        count = count + 1
        temp = temp // 10

print(count)

# Output for 58321
# 5
#
# Output for 904
# 3


# Question 24

n = int(input("Enter number: "))
temp = n
total = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10
        total = total + digit
        temp = temp // 10

print(total)

# Output for 58321
# 19
#
# Output for 907
# 16


# Question 25

n = int(input("Enter number: "))
temp = n
product = 1

for i in range(n):
    if temp > 0:
        digit = temp % 10
        product = product * digit
        temp = temp // 10

print(product)

# Output for 234
# 24
#
# Output for 105
# 0


# Question 26

n = int(input("Enter number: "))
temp = n
count = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit % 2 == 0:
            count = count + 1

        temp = temp // 10

print(count)

# Output for 58321
# 2
#
# Output for 24680
# 5


# Question 27

n = int(input("Enter number: "))
temp = n
total = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit % 2 == 0:
            total = total + digit

        temp = temp // 10

print(total)

# Output for 58321
# 10
#
# Output for 24681
# 20


# Question 28

n = int(input("Enter number: "))
temp = n
largest = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit > largest:
            largest = digit

        temp = temp // 10

print(largest)

# Output for 58321
# 8
#
# Output for 40796
# 9


# Question 29

n = int(input("Enter number: "))
temp = n
smallest = 9

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit < smallest:
            smallest = digit

        temp = temp // 10

print(smallest)

# Output for 58321
# 1
#
# Output for 40796
# 0


# Question 30

n = int(input("Enter number: "))
temp = n
reverse = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10
        reverse = reverse * 10 + digit
        temp = temp // 10

print(reverse)

# Output for 58321
# 12385
#
# Output for 12040
# 4021


# Question 31

n = int(input("Enter number: "))
original = n
temp = n
reverse = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10
        reverse = reverse * 10 + digit
        temp = temp // 10

if original == reverse:
    print("Palindrome")
else:
    print("Not Palindrome")

# Output for 1221
# Palindrome
#
# Output for 1234
# Not Palindrome


# Question 32

n = int(input("Enter number: "))
target = int(input("Enter target digit: "))

temp = n
count = 0

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit == target:
            count = count + 1

        temp = temp // 10

print(count)

# Output for 1223342, 2
# 3
#
# Output for 505550, 5
# 4


# Question 33

n = int(input("Enter number: "))
temp = n

for i in range(n):
    if temp >= 10:
        temp = temp // 10

print(temp)

# Output for 58321
# 5
#
# Output for 9047
# 9


# Question 34

n = int(input("Enter number: "))
temp = n
largest = 0
smallest = 9

for i in range(n):
    if temp > 0:
        digit = temp % 10

        if digit > largest:
            largest = digit

        if digit < smallest:
            smallest = digit

        temp = temp // 10

print(largest - smallest)

# Output for 58321
# 7
#
# Output for 40796
# 9


# Question 35

n = int(input("Enter number: "))
temp = n
position = 1

for i in range(n):
    if temp > 0:
        digit = temp % 10
        print(digit, position)

        temp = temp // 10
        position = position + 1

# Output for 58321
# 1 1
# 2 2
# 3 3
# 8 4
# 5 5


# Question 36

n = int(input("Enter 3-digit number: "))
temp = n
total = 0

for i in range(3):
    digit = temp % 10
    total = total + digit ** 3
    temp = temp // 10

if total == n:
    print("Armstrong Number")
else:
    print("Not Armstrong Number")

# Output for 153
# Armstrong Number
#
# Output for 123
# Not Armstrong Number

