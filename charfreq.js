function charFreq(x) {

	var frequencyList = {
		"a":0,
		"b":0,
		"c":0,
		"d":0
	}

	for(var i=0; i < x.length; i++){
    	if(x[i] === "a"){
        	frequencyList.a += 1;      	
    	}
    	else if(x[i] === "b"){
    		frequencyList.b += 1;	
    	}
    	else if(x[i] === "c"){
    		frequencyList.c += 1;	
    	}
    	else if(x[i] === "d"){
    		frequencyList.d += 1;	
    	}      
	} 
	return frequencyList;
}