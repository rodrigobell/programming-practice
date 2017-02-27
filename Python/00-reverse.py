def reverse(string):
    reversed_str = ""

    for i in range(len(string)-1,-1,-1):
        reversed_str += string[i]

    return reversed_str

print(reverse(""))
