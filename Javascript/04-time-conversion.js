function timeConversion(minutes) {
	var hours = 0;

	while (minutes >= 60) {
		minutes -= 60;
		hours++;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	return hours + ":" + minutes;
}

console.log(timeConversion(360));