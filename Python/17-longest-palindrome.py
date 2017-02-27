def is_palindrome(str):
    i = 0

    while i < len(str)/2:
        if str[i] != str[-i-1]:
            return False

        i += 1

    return True

def longest_palindrome(str):
    result = ""
    length = 0

    for i in range(0, len(str)):
        for j in range(i+1, len(str)+1):
            substr = str[i:j]
            if is_palindrome(substr) and \
               len(substr) > length:
                result = substr
                length = len(substr)


    return result

print(longest_palindrome("abcbedeffe"))
