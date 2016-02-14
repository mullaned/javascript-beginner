function filterLongWords(x,lgth) {
	
	var result = [];

	for(var i=0; i < x.length; i++){
    	if(x[i].length > lgth){
        	result += x[i];
    	}      
	} 
	return result;
}