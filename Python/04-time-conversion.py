def time_conversion(mins):
    hours = 0

    while mins >= 60:
        hours += 1
        mins -= 60

    if mins < 10:
        mins = "0" + str(mins)

    return "{hours}:{mins}".format(hours=hours, mins=mins)

print(time_conversion(365))