def two_sum(nums):

    for i in range(0, len(nums)):
        for j in range(i, len(nums)):
            if nums[i] + nums[j] == 0:
                return [i,j]

    return

print(two_sum([2,3,-2,3]))