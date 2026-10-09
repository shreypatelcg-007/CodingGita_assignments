text=input("Enter Text:")
even_index = 0
total = 0
vowels = 0
consonants = 0
uppercase = 0
lowercase = 0

for i in range(len(text)):
    ch = text[i]

    total = total + 1

    if i % 2 == 0:
        even_index = even_index + 1

    if ch != " ":
        if ch in "aeiouAEIOU":
            vowels = vowels + 1
        else:
            consonants = consonants + 1

        if ch.isupper():
            uppercase = uppercase + 1
        elif ch.islower():
            lowercase = lowercase + 1

print("Total Characters:", total)
print("Vowels:", vowels)
print("Consonants:", consonants)
print("Uppercase:", uppercase)
print("Lowercase:", lowercase)
print("Even Index Characters:", even_index)

# Output for Hello World
# Total Characters: 11
# Vowels: 3
# Consonants: 7
# Uppercase: 2
# Lowercase: 8
# Even Index Characters: 6
