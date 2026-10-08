# Question 45

text = input("Enter string: ")
middle = len(text) // 2

for i in range(len(text)):
    if i == middle:
        print(text[i])

# Output for Python
# h
#
# Output for abcde
# c


# Question 46

text = input("Enter string: ")
middle = len(text) // 2
first = ""
second = ""

for i in range(len(text)):
    if i < middle:
        first = first + text[i]
    else:
        second = second + text[i]

print("First Half:", first)
print("Second Half:", second)

# Output for PythonCode
# First Half: Pytho
# Second Half: nCode
#
# Output for ABCDEF
# First Half: ABC
# Second Half: DEF


# Question 47

text = input("Enter string: ")
middle = len(text) // 2
first = ""
second = ""
middle_char = ""

for i in range(len(text)):
    if len(text) % 2 == 0:
        if i < middle:
            first = first + text[i]
        else:
            second = second + text[i]
    else:
        if i < middle:
            first = first + text[i]
        elif i == middle:
            middle_char = text[i]
        else:
            second = second + text[i]

print("First Half:", first)

if len(text) % 2 != 0:
    print("Middle:", middle_char)

print("Second Half:", second)

# Output for PROGRAM
# First Half: PRO
# Middle: G
# Second Half: RAM
#
# Output for PYTHON
# First Half: PYT
# Second Half: HON
#
# Output for HELLO
# First Half: HE
# Middle: L
# Second Half: LO


# Question 48

text = input("Enter string: ")
middle = len(text) // 2
same = True

for i in range(middle):
    if text[i] != text[i + middle]:
        same = False

if same:
    print("Equal Halves")
else:
    print("Different Halves")

# Output for ABCABC
# Equal Halves
#
# Output for ABCABD
# Different Halves
#
# Output for XYZXYZ
# Equal Halves


# Question 49

text = input("Enter string: ")
symmetric = True
middle = len(text) // 2

for i in range(middle):
    if text[i] != text[len(text) - 1 - i]:
        symmetric = False

if symmetric:
    print("Symmetric")
else:
    print("Not Symmetric")

# Output for ABCCBA
# Symmetric
#
# Output for ABCD
# Not Symmetric
#
# Output for MADAM
# Symmetric


# Question 50

text = input("Enter string: ")
result = ""

for i in range(len(text)):
    if i % 2 == 0:
        result = result + text[i]

print(result)

# Output for ABCDEFGH
# ACEG
#
# Output for Python
# Pto


# Question 51

text = input("Enter string: ")
even = 0
odd = 0

for i in range(len(text)):
    if i % 2 == 0:
        even = even + 1
    else:
        odd = odd + 1

print("Even Index =", even)
print("Odd Index =", odd)

# Output for Python
# Even Index = 3
# Odd Index = 3
#
# Output for ABCDE
# Even Index = 3
# Odd Index = 2


# Question 52

text = input("Enter string: ")
result = ""

for i in range(0, len(text), 2):
    result = result + text[i + 1] + text[i]

print(result)

# Output for ABCD
# BADC
#
# Output for ABCDEFGH
# BADCFEHG

