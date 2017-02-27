def is_prime(num):
    if num <= 1:
        return False

    for i in range(2, num/2+1):
        if (num % i == 0):
            return False

    return True

def nth_prime(num):
    count = 0

    i = 2
    while True:
        if is_prime(i):
            count += 1
        if count == num:
            return i
        i += 1

    return

print(nth_prime(5))