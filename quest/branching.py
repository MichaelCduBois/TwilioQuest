from sys import argv

var = int(argv[1]) + int(argv[2])

if var <= 0:
    print("You have chosen the path of destitution.")
elif 1 <= var <= 100:
    print("You have chosen the path of plenty.")
elif var > 100:
    print("You have chosen the path of excess.")
