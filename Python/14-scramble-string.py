def scramble_string(str, pos):
    result = ""

    for i in range(0, len(str)):
        result += str[pos[i]]

    return result

print(scramble_string("abcd", [3,1,2,0]))