
//return the longest word
function findLongestWord(x) {
	// body...
	var lgth = 0;
	var longest;

	for(var i=0; i < x.length; i++){
    	if(x[i].length > lgth){
        	var lgth = x[i].length;
        	longest = x[i];
    	}      
	} 
	return longest;
}

















// return the length of the longest word
function findLongestWord(x) {
	// body...
	var lgth = 0;
	var longest;
	
	for(var i=0; i < x.length; i++){
    	if(x[i].length > lgth){
        	var lgth = x[i].length;      	
    	}      
	} 
	return lgth;
}