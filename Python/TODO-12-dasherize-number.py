def dasherize_number(num):
    num_s = str(num)
    result = ""

    for i in range(0, len(num_s)):
        if int(num_s[i]) % 2 == 1:
            if i == 0:
                result += num_s[i] + "-"
            elif i == len(num_s)-1:
                result += "-" + num_s[i]
            else:
                result += "-" + num_s[i] + "-"
        else:
            result += num_s[i]

    return result

print(dasherize_number(333))