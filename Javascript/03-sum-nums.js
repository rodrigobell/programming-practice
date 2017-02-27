console.log(sumNums(1));

function sumNums(num) {
	var sum = 0;
	var i = 0;

	while (i < num) {
		i++;
		sum = sum + i;
	}

	return sum;
}