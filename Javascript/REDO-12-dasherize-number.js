function dasherize(num) {
	var str = num.toString();
	var result = "";

	for (var i = 0; i < str.length; i++) {
		if (str[i] % 2 == 1) {
			if (i == 0 || result.slice(-1) == "-") {
				result += str[i] + "-";
			} else if (i == str.length-1 && result.slice(-1) != "-") {
				result += "-" + str[i];
			} else {
				result += "-" + str[i] + "-";
			}
		} else {
			result += str[i];
		}
		console.log(result);
	}

	return result;
}

console.log(dasherize(333));
