console.log(longestWord("abc def abcde"));

function longestWord(sentence) {
	var words = sentence.split(" ");
	var longestCount = 0;
	var longestWord = "";

	for (var i = 0; i < words.length; i++) {
		var wordCount = words[i].length;
		if (wordCount > longestCount) {
			longestCount = wordCount;
			longestWord = words[i];
		}
	}

	return longestWord;
}