def third_greatest(nums):
    first = 0
    second = 0
    third = 0

    for i in range(0, len(nums)):
        if nums[i] > first:
            third = second
            second = first
            first = nums[i]
        elif nums[i] > second:
            third = second
            second = nums[i]
        elif nums[i] > third:
            third = nums[i]

    return third

print(third_greatest([3,4,5,8,2]))