function scramble(string, positions) {
	var result = "";

	for (var i = 0; i < positions.length; i++) {
		result += string[positions[i]];
	}

	return result;
}

console.log(scramble("markov", [5,3,1,4,2,0]));
