function randomSmallest() {
	// body...
	var a = Math.floor((Math.random() * 100) + 1);
	var b = Math.floor((Math.random() * 100) + 1);

	var result = [];

	console.log(a);
	console.log(b);


	for (var i = 2; i < 100; i++) {
		if ((a%i===0) && (b%i===0)){
			result += i;
		}
		
		
		
	}
	if (result.length>0) {
		return	result;	
	}

	else {
		return "No number found";
	}
	
	
}