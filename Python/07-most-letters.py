def nearby_az(string):

    for i in range(0, len(string)):
        if string[i] == 'a':
            for j in range(i, i+4):
                try:
                    char = string[j]
                    if char == 'z':
                        return True
                except IndexError:
                    continue

    return False

print(nearby_az("zabsz"))