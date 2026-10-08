# Question 37

text = input("Enter string: ")

for i in range(len(text)):
    print(i, text[i])

# Output for Python
# 0 P
# 1 y
# 2 t
# 3 h
# 4 o
# 5 n


# Question 38

text = input("Enter string: ")
count = 0

for ch in text:
    count = count + 1

print(count)

# Output for Python
# 6
#
# Output for Hello World
# 11


# Question 39

text = input("Enter string: ")
vowels = 0
consonants = 0

for ch in text:
    if ch != " ":
        if ch in "aeiouAEIOU":
            vowels = vowels + 1
        else:
            consonants = consonants + 1

print("Vowels =", vowels)
print("Consonants =", consonants)

# Output for Python
# Vowels = 1
# Consonants = 5
#
# Output for Hello World
# Vowels = 3
# Consonants = 7


# Question 40

text = input("Enter string: ")
target = input("Enter target character: ")
count = 0

for ch in text:
    if ch == target:
        count = count + 1

print(count)

# Output for programming, g
# 2
#
# Output for banana, a
# 3


# Question 41

text = input("Enter string: ")
target = input("Enter target character: ")

position = -1

for i in range(len(text)):
    if text[i] == target and position == -1:
        position = i

if position == -1:
    print("Not Found")
else:
    print(position)

# Output for programming, g
# 3
#
# Output for banana, n
# 2
#
# Output for Python, z
# Not Found


# Question 42

text = input("Enter string: ")
uppercase = 0
lowercase = 0

for ch in text:
    if ch.isupper():
        uppercase = uppercase + 1
    elif ch.islower():
        lowercase = lowercase + 1

print("Uppercase =", uppercase)
print("Lowercase =", lowercase)

# Output for PyThOn
# Uppercase = 3
# Lowercase = 3
#
# Output for HelloWORLD
# Uppercase = 6
# Lowercase = 4


# Question 43

text = input("Enter string: ")

for ch in text:
    print(ch, ord(ch))

# Output for ABC
# A 65
# B 66
# C 67


# Question 44

text = input("Enter string: ")
result = ""

for ch in text:
    if ch not in "aeiouAEIOU":
        result = result + ch

print(result)

# Output for education
# dctn
#
# Output for Python
# Pythn
