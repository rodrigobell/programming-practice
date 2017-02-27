function capitalizeWords(string) {
	var words = string.split(" ");
	var result = "";

	for (var i = 0; i < words.length; i++) {
		upperCase = words[i].charAt(0).toUpperCase() + words[i]. slice(1);
		result += upperCase + " ";
	}

    result = result.slice(0,-1);

    return result;
}

console.log(capitalizeWords("mike bloomfield"));
