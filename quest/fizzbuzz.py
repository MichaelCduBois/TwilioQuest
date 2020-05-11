from sys import argv

for n in argv[1:]:
    if int(n) % 3 == 0 and int(n) % 5 == 0:
        print("fizzbuzz")
    elif int(n) % 3 == 0:
        print("fizz")
    elif int(n) % 5 == 0:
        print("buzz")
    else:
        print(int(n))
    argv[1:].pop(0)
