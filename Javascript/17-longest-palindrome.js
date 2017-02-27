function palindrome(string) {
	var len = string.length;

	for (var i = 0; i < Math.floor(len/2); i++) {
		if (string[i] != string[len - 1 - i]) {
			return false;
		}
	}

	return true;
}

function longestPalindrome(string) {
	var substring = "";
	var result = "";

	if (string.length == 1) {
		return string;
	}

	for (var i = 0; i < string.length-2; i++) {
		for (var j = 2; j < string.length; j++) {
			substring = string.slice(i,j+1);
			if (palindrome(substring) &&
				 substring.length > result.length) {
				result = substring;
			}
		}
	}

	return result;
}

console.log(longestPalindrome("a"));
