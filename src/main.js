function getPrimeFactors(inputValue) {
	var factors = []
	
	for (var i = 2; i <= inputValue; i++) { // Prime numbers are always greater than 1
		while ((inputValue % i) === 0) {
			factors.push(i);
			inputValue /= i;
		}
	}
	
	return factors;
}

function raindropSpeak(inputValue){
	if (typeof inputValue !== 'number') 
	return 'Argument must be an integer';
	
	var result = "";
	var primeFactors = getPrimeFactors(inputValue); // Get array of prime numbers using oir own getPrimeFactors function
	
	
	if (primeFactors.indexOf(3) > -1) // if primeFactors contains 3, add Pling to result
		result+="Pling";
	
	if (primeFactors.indexOf(5) > -1) // if primeFactors contains 5, add Plang to result
		result+="Plang";
	
	if (primeFactors.indexOf(7) > -1) // if primeFactors contains 7, add Plong to result
		result+="Plong";
	
	if(!result) // If result is still empty, means input does not contain 3, 5 and 7 as a prime factor... Print out the input value
		result = inputValue.toString();
	
	return result;
}


module.exports.raindropSpeak = raindropSpeak;