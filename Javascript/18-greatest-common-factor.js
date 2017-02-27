function greatestCommonFactor(num1, num2) {
	var lesser = 0;
	var result = 0;

	if (num1 > num2) {
		lesser = num2;
	} else {
		lesser = num1;
	}

	for (var i = 1; i <= lesser; i++){
		if (num1 % i == 0 && num2 % i == 0) {
			result = i;
		}
	}

	return result;
}

console.log(greatestCommonFactor(16, 16));
