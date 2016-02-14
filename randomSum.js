function randomSum() {
	// body...
	var n = Math.floor(Math.random() * ((9999-1000)+1) + 1000);

	console.log(n);

	var numberStr = n.toString();
	var result = 0;

	for (var i = 0; i < numberStr.length; i++) {
		result += parseInt(numberStr[i]);
	}
	
return result;
}