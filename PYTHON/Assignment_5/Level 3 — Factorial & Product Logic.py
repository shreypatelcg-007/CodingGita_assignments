# Question 15

n = int(input("Enter N: "))
factorial = 1

for i in range(1, n + 1):
    factorial = factorial * i

print(factorial)

# Output for 5
# 120
#
# Output for 7
# 5040


# Question 16

n = int(input("Enter N: "))
factorial = 1

for i in range(1, n + 1):
    factorial = factorial * i
    print(i, "! =", factorial)

# Output for 5
# 1 ! = 1
# 2 ! = 2
# 3 ! = 6
# 4 ! = 24
# 5 ! = 120


# Question 17

n = int(input("Enter N: "))
product = 1

for i in range(2, n + 1, 2):
    product = product * i

print(product)

# Output for 10
# 3840
#
# Output for 6
# 48


# Question 18

n = int(input("Enter N: "))
product = 1

for i in range(1, n + 1, 2):
    product = product * i

print(product)

# Output for 7
# 105
#
# Output for 9
# 945


# Question 19

n = int(input("Enter even N: "))
product = 1

for i in range(n, 0, -2):
    product = product * i

print(product)

# Output for 8
# 384
#
# Output for 10
# 3840


# Question 20

n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total = total + i ** 2

print(total)

# Output for 5
# 55
#
# Output for 10
# 385


# Question 21

n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total = total + i ** 3

print(total)

# Output for 4
# 100
#
# Output for 5
# 225


# Question 22

n = int(input("Enter N: "))
factorial = 1
total = 0

for i in range(1, n + 1):
    factorial = factorial * i
    total = total + factorial

print(total)

# Output for 4
# 33
#
# Output for 5
# 153
