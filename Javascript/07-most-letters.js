function nearbyAz(string) {

	for (var i = 0; i < string.length-1; i++) {
		if (string[i] == 'a' &&
		   (string[i+1] == 'z' ||
			string[i+2] == 'z' ||
			string[i+3] == 'z')) {
			return true;
		}
	}

	return false;
}

console.log(nearbyAz("zebceaz"));
