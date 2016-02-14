function randomEven() {
	// body...
	var a = Math.floor((Math.random()*100)+1);
	var result = [];
	
	for (var i=0; i<a; i++) {
		if (i%2===0) {
			result+=i + " ";
		};
	}
	return result;
}
