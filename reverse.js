function reverse(x) {
	result = "";

	for (var i = (x.length-1); i >=0 ; i--) {
		result += x[i];
	};

	return result;
}