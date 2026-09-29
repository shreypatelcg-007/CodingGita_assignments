## Q71. Condition Order

Predict the output:

```python
marks = 85

if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("Very Good")
else:
    print("Fail")
```

### Test Case

`85 → ?`

Then explain why the program does not print `Very Good`.

## ANSWER

Output:

```Pass```

Explanation:

Since ```85 >= 40``` is True, Python prints ```Pass``` and stops checking the remaining ```elif``` conditions.


---

## Q72. Correct the Condition Order

The following program is intended to classify marks:

```python
marks = 85

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")
```

Predict the output.

Then explain why changing the order of the conditions can change the result.

### Test Cases

`95 → ?`  
`85 → ?`  
`50 → ?`  
`30 → ?`

## ANSWER

Output:


`95 → A`  Because `95 >= 90` is true.

`85 → B`  Because `85 >= 90` is false, but `85 >= 75` is true.

`50 → Pass`  Because `50 >= 90` and `50 >= 75` are false, but `50 >= 40` is true

`30 → fail`  Because all three conditions are false.


Explanation:

The conditions are checked from top to bottom. Once Python finds a true condition, it executes that block and skips the remaining `elif` conditions.
So the higher ranges should be checked first

---

## Q73. Nested `if` Execution Flow

Predict the output:

```python
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry Allowed")
    else:
        print("ID Required")
else:
    print("Underage")
```

### Test Case

`age = 20, has_id = True → ?`

Now predict the output if:

```text
age = 20
has_id = False
```

and:

```text
age = 16
has_id = True
```
## ANSWER

`age = 20, has_id = True`

Output:

`Entry Allowed`

Explanation:

-`20 >= 18` → True

-So Python enters the first if.

-`has_id` is `True`.

-Therefore, it prints Entry Allowed.

`age = 20, has_id = False`

Output:

`ID Required`

Explanation:

`20 >= 18` → True

`has_id` → False

So the inner `else` executes.

`age = 16, has_id = True`

Output:

`Underage`

Explanation:

`16 >= 18` → False

Therefore, Python doesn't enter the inner `if` at all.

The outer `else` executes.
---

## Q74. `match-case` and Default Case

Predict the output:

```python
choice = 5

match choice:
    case 1:
        print("Add")
    case 2:
        print("View")
    case 3:
        print("Delete")
    case _:
        print("Invalid Choice")
```

### Test Cases

`1 → ?`  
`3 → ?`  
`5 → ?`

Explain the purpose of `case _`.

---

## Q75. Final Execution Challenge

Predict the output without running the program:

```python
marks = 82
attendance = 80

if attendance >= 75:
    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")
```

### Test Cases

`82 80 → ?`  
`92 80 → ?`  
`55 80 → ?`  
`92 60 → ?`

After predicting the output, write in one sentence which condition is checked first and why.

---

