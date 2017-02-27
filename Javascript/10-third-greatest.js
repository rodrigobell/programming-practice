function thirdGreatest(nums) {
	var first = 0, second = 0, third = 0;

	for (var i = 0; i < nums.length; i++) {
		if (nums[i] > first || first == 0) {
			third = second;
			second = first;
			first = nums[i];
		} else if (nums[i] > second || second == 0) {
			third = second;
			second = nums[i];
		} else if (nums[i > third || third == 0]) {
			third = nums[i];
		}
	}

	return third;
}

console.log(thirdGreatest([5,3,7,4,5,6,0,0,0,0,0]));
