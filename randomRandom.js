function randomRandom() {
	// body...
	var a = Math.floor((Math.random()*100)+1);
	var result = [];
	var largest = 0;

	console.log(a);
	
	for (var i=0; i<a; i++) {
		var b = Math.floor((Math.random()*100)+1);
		result+= b + " ";		
	}	
	
	console.log(result);

	for (var j=0; j<=result.length;j++){
    	if (result[j]>largest) {
        	largest=result[j];
    	}
	}


return	largest;
}