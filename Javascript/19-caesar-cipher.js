function caesarCipher(offset, string) {
	var result = "";

	for (var i = 0; i < string.length; i++) {
		var asc = string.charCodeAt(i);

		if (asc == 32) {
			result += " ";
			continue;
		} else if (asc + offset > 122) {
			asc = (asc - 122 + 96);
		}

		result += String.fromCharCode(asc + offset);
	}

	return result;
}

console.log(caesarCipher(3,"abc xyz"));
