function sum(x) {
	var result = 0;

	for (var i = 0; i < x.length; i++) {
		result += x[i]
	};

	return result;
}


function multiply(x) {
	var result = 1;

	for (var i = 0; i < x.length; i++) {
		result = result * x[i]
	};

	return result;
}