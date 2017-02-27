def sum_nums(n):
    sum = 0

    while n > 0:
        sum += n
        n -= 1

    return sum

print(sum_nums(4))