function randomOddSmaller() {
	// body...
	var a = Math.floor((Math.random()*100)+1);
	var result = [];
	
	if(a>40){
		for (var i=40; i<a; i++) {
			if (i%2===1) {
			result+=i + " ";
			}
		}
	}		
	else if(a<40) {
		for (var j=40; j>a; j--) {
			result+=j + " ";			
		}
	}
	return result;
}