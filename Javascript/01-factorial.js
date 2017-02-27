console.log(factorial(4));

function factorial(n) {
	var result = 1;
	var i = n;

	while (i > 1) {
		result *= i;
		i--;
	}

	return result;
}