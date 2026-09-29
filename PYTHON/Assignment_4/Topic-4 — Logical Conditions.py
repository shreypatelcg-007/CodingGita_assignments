# Q29
marks = int(input("Enter marks: "))
attendance = int(input("Enter attendance: "))

if marks >= 60 and attendance >= 75:
    print("Eligible")
else:
    print("Not Eligible")


# Q30
marks = int(input("Enter marks: "))
income = int(input("Enter income: "))

if marks >= 85 or income < 300000:
    print("Scholarship Available")
else:
    print("No Scholarship")


# Q31
day = input("Enter day: ")

if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")


# Q32
username = input("Enter username: ")
password = input("Enter password: ")

if username == "student" and password == "python123":
    print("Access Granted")
else:
    print("Access Denied")


# Q33
city = input("Enter city: ")

if city == "Ahmedabad" or city == "Gandhinagar":
    print("Delivery Available")
else:
    print("Delivery Unavailable")


# Q34
num = int(input("Enter number: "))

if num >= 10 and num <= 50:
    print("Inside Range")
else:
    print("Outside Range")


# Q35
amount = int(input("Enter amount: "))
otp = input("Enter OTP: ")

if amount <= 50000 and otp == "1234":
    print("Transaction Approved")
else:
    print("Transaction Declined")
