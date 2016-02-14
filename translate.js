function translate(x) {
	result = "";
	var vowels = "aeiou ";
	for (var i = 0; i < x.length; i++) {				
		if(vowels.indexOf(x[i])===-1) {
			result += x[i] + "o" + x[i];
		}
		else {
			result += x[i];
		}
	}
return result;
}



