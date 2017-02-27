console.log(reverse("abc"));

function reverse(string) {
	var reverse = "";
	var i = string.length;

    while (i--) {
    	reverse += string[i];
    }

    return reverse;
}
