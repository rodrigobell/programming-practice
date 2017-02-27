def most_common_letter(str):
    letter = ""
    letter_count = 1

    for i in range(0, len(str)):
        count = 0
        for j in range(i, len(str)):
            if str[i] == str[j]:
                count += 1
        if count > letter_count:
            letter_count = count
            letter = str[i]

    return [letter, letter_count]


print(most_common_letter("aboo"))
print(most_common_letter("abeusessu"))