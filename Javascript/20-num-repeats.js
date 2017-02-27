function numRepeats(string) {
	var lettersChecked = "";
	var count = 0;

	for (var i = 0; i < string.length; i++) {
		var checkLetter = string[i];
		var checked = false;

		for (var j = 0; j < lettersChecked.length; j++) {
			if (checkLetter == lettersChecked[j]) {
				checked = true;
			}
		}

		for (var j = 0; j < string.length; j++) {
			if (string[i] == string[j] && i != j && checked == false) {
				lettersChecked += string[i];
				count++;
				break;
			}
		}
	}

	return count;
}

console.log(numRepeats("abcdeabcde"));
