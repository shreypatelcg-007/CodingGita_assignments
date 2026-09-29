# Q36
username = input("Enter username: ")
password = input("Enter password: ")

if username == "admin":
    if password == "admin123":
        print("Login Successful")
    else:
        print("Wrong Password")
else:
    print("Invalid Username")


# Q37
age = int(input("Enter age: "))
test = input("Enter test status: ")

if age >= 18:
    if test == "pass":
        print("License Approved")
    else:
        print("Test Not Passed")
else:
    print("Age Not Eligible")


# Q38
balance = int(input("Enter balance: "))
amount = int(input("Enter withdrawal amount: "))

if amount <= balance:
    if amount % 100 == 0:
        print("Withdrawal Successful")
    else:
        print("Enter amount in multiples of 100")
else:
    print("Insufficient Balance")


# Q39
attendance = int(input("Enter attendance: "))
marks = int(input("Enter marks: "))

if attendance >= 75:
    if marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible Due to Attendance")


# Q40
account = input("Enter account type: ")
balance = int(input("Enter balance: "))

if account == "savings":
    if balance >= 1000:
        print("Minimum Balance Maintained")
    else:
        print("Minimum Balance Not Maintained")
else:
    print("Unsupported Account")


# Q41
amount = int(input("Enter amount: "))
payment = input("Enter payment method: ")

if amount >= 500:
    if payment == "card":
        print("Card Payment Accepted")
    elif payment == "upi":
        print("UPI Payment Accepted")
    else:
        print("Unsupported Payment")
else:
    print("Minimum Order Amount Not Reached")


# Q42
year = int(input("Enter year of study: "))
attendance = int(input("Enter attendance: "))

if year == 2 or year == 3 or year == 4:
    if attendance >= 75:
        print("Room Eligible")
    else:
        print("Attendance Too Low")
else:
    print("Not Eligible by Year")


# Q43
plan = input("Enter plan: ")
usage = int(input("Enter usage: "))

if plan == "basic":
    if usage > 100:
        print("Recommend Upgrade")
    else:
        print("Basic Plan Is Sufficient")
else:
    print("Already on Higher Plan")

