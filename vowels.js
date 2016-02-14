function isVowel(y) {
	var x = y.toLowerCase();
	var vowels = "aeiou";
	if(vowels.indexOf(x)>=0) {
		return true;
	}
	else {
		return false;
	}
}