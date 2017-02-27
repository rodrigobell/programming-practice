def is_power_of_two(num):

    while num % 2 == 0:
        num /= 2

    if num == 1:
        return True
    else:
        return False

print(is_power_of_two(1026))