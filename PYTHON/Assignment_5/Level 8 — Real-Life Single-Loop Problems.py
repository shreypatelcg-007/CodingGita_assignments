# Question 62

n = int(input("Enter number of days: "))

total = 0
highest = 0
lowest = 0

for i in range(n):
    expense = int(input("Enter expense: "))

    total = total + expense

    if i == 0:
        highest = expense
        lowest = expense
    else:
        if expense > highest:
            highest = expense

        if expense < lowest:
            lowest = expense

print("Total:", total)
print("Highest:", highest)
print("Lowest:", lowest)

# Input
# 5
# 250
# 180
# 400
# 120
# 300

# Output
# Total: 1250
# Highest: 400
# Lowest: 120


# Question 63

n = int(input("Enter number of subjects: "))

total = 0
highest = 0
lowest = 0

for i in range(n):
    marks = int(input("Enter marks: "))

    total = total + marks

    if i == 0:
        highest = marks
        lowest = marks
    else:
        if marks > highest:
            highest = marks

        if marks < lowest:
            lowest = marks

average = total / n

print("Total:", total)
print("Average:", average)
print("Highest:", highest)
print("Lowest:", lowest)

# Input
# 5
# 78
# 65
# 92
# 81
# 74

# Output
# Total: 390
# Average: 78.0
# Highest: 92
# Lowest: 65


# Question 64

n = int(input("Enter working days: "))

present = 0
absent = 0

for i in range(n):
    status = input("Enter P or A: ")

    if status == "P":
        present = present + 1
    else:
        absent = absent + 1

attendance = present / n * 100

print("Present:", present)
print("Absent:", absent)
print("Attendance:", round(attendance, 2), "%")

# Input
# 6
# P
# P
# A
# P
# A
# P

# Output
# Present: 4
# Absent: 2
# Attendance: 66.67 %


# Question 65

n = int(input("Enter number of days: "))

total = 0
above_10 = 0

for i in range(n):
    units = int(input("Enter units: "))

    total = total + units

    if units > 10:
        above_10 = above_10 + 1

print("Total Units:", total)
print("Days Above 10:", above_10)

# Input
# 5
# 8
# 12
# 15
# 7
# 13

# Output
# Total Units: 55
# Days Above 10: 3


# Question 66

n = int(input("Enter number of products: "))

total = 0
above_1000 = 0

for i in range(n):
    price = int(input("Enter price: "))

    total = total + price

    if price > 1000:
        above_1000 = above_1000 + 1

print("Total Bill:", total)
print("Products Above 1000:", above_1000)

# Input
# 5
# 450
# 1200
# 800
# 2500
# 600

# Output
# Total Bill: 5550
# Products Above 1000: 2


# Question 67

n = int(input("Enter number of attempts: "))

successful = 0
failed = 0

for i in range(n):
    attempt = input("Enter success or failed: ")

    if attempt == "success":
        successful = successful + 1
    else:
        failed = failed + 1

rate = successful / n * 100

print("Successful:", successful)
print("Failed:", failed)
print("Success Rate:", rate, "%")

# Input
# 5
# success
# failed
# success
# failed
# success

# Output
# Successful: 3
# Failed: 2
# Success Rate: 60.0 %
