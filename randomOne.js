function randomSum() {
	// body...
	var n = Math.floor(Math.random() * ((9999-1000)+1) + 1000);

	console.log(n);

	var numberStr = n.toString();
	var result = 0;
	var firstResult=0

	
	for (var i = 0; i < numberStr.length; i++) {
		firstResult += parseInt(numberStr[i]);
	}

	console.log(firstResult);

	firstResultStr = firstResult.toString();

	for (var j =0; j < firstResultStr.length; j++) {
		result += parseInt(firstResultStr[j]);
	}
	

return result;
}