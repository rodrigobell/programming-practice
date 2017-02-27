function countVowels(string) {
	var count = 0;
	var vowels = "aeiou"

	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if (string[i] == vowels[j]) {
				count++;
			}
		}
	}

	return count;
}

console.log(countVowels("cecilia"));