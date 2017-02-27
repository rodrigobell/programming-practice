def is_palindrome(str):
    i = 0

    while i < len(str)/2:
        if str[i] != str[-i-1]:
            return False

        i += 1

    return True

print(is_palindrome("abcba"))