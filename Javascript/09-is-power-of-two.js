function powerOfTwo(num) {

	if (num <= 0) {
		return false;
	}

	while (num % 2 == 0) {
		num /= 2;
	}

	if (num == 1) {
		return true;
	} else {
		return false;
	}
}

console.log(powerOfTwo(0));