function palindrome(string) {
	var len = string.length;

	for (var i = 0; i < Math.floor(len/2); i++) {
		if (string[i] != string[len - 1 - i]) {
			return false;
		}
	}

	return true;
}

console.log(palindrome("zftetfz"));