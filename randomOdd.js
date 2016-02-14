function randomOdd() {
	// body...
	var a = Math.floor((Math.random()*100)+1);
	var result = [];
	
	for (var i=40; i<a; i++) {
		if (i%2===1) {
			result+=i + " ";
		}
		
	}
	return result;
}
