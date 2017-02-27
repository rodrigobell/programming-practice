function twoNums(nums) {
	var positions = [];

	for (var i = 0; i < nums.length-1; i++) {
		for (var j = 0; j < nums.length; j++) {
			//console.log("check: " + nums[i]);
			//console.log("against: " + nums[j]);
			if (nums[i] == 0) {
				continue;
			} else if (nums[i] + nums[j] == 0) {
				positions.push(i);
				positions.push(j);
				return positions;
			}
		}
	}

	return null;
}

console.log(twoNums([1,0,3,5,-3,0]));