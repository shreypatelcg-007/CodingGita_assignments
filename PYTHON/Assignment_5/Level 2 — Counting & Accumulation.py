# Question 7

start = int(input("Enter start: "))
end = int(input("Enter end: "))

total = 0

for i in range(start, end + 1):
    total = total + i

print(total)

# Output for 5 10
# 45
#
# Output for 12 15
# 54


# Question 8

n = int(input("Enter N: "))
count = 0

for i in range(1, n + 1):
    if i % 3 == 0:
        count = count + 1

print(count)

# Output for 10
# 3
#
# Output for 20
# 6


# Question 9

n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    if i % 4 == 0:
        total = total + i

print(total)

# Output for 20
# 60
#
# Output for 30
# 112


# Question 10

n = int(input("Enter N: "))
count = 0

for i in range(1, n + 1):
    if i % 3 == 0 and i % 5 == 0:
        count = count + 1

print(count)

# Output for 50
# 3
#
# Output for 100
# 6


# Question 11

n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    if i % 3 != 0:
        total = total + i

print(total)

# Output for 10
# 37
#
# Output for 15
# 80


# Question 12

n = int(input("Enter N: "))
even = 0
odd = 0

for i in range(1, n + 1):
    if i % 2 == 0:
        even = even + 1
    else:
        odd = odd + 1

print("Even =", even)
print("Odd =", odd)

# Output for 10
# Even = 5
# Odd = 5
#
# Output for 7
# Even = 3
# Odd = 4


# Question 13

n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total = total + i
    print(total)

# Output for 5
# 1
# 3
# 6
# 10
# 15


# Question 14

n = int(input("Enter N: "))
product = 1

for i in range(1, n + 1):
    product = product * i
    print(product)

# Output for 5
# 1
# 2
# 6
# 24
# 120
