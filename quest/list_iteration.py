import sys

order = 1

for person in sys.argv[1:]:
    print(f"{order}. {person}")
    order += 1
