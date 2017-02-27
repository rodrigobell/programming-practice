function mostCommonLetter(string) {
	var lettersChecked = "";
	var letter = "";
	var count = 0;

	for (var i = 0; i < string.length; i++) {
		var curLetter = string[i];
		var curCount = 1;

		for (var j = 0; j < string.length; j++) {
			if (i == j) {
				continue;
			} else if (curLetter == string[j]) {
				curCount++;
			}
		}

		if (curCount > count) {
			letter = curLetter;
			count = curCount;
		}
	}

	return [letter,count];
}

console.log(mostCommonLetter("accceuoaaa"));