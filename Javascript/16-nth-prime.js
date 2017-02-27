function isPrime(num) {

	if (num <= 1) {
		return false;
	}

	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return true;
}

function nthPrime(n) {
	var primes = [];
	var i = 2;

	while (true) {
		if (isPrime(i)) {
			primes.push(i);
		}

		if (primes.length == n) {
			return primes[n-1];
		}

		i++;
	}

	return null;

}

console.log(nthPrime(1000));
