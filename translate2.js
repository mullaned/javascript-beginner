
function translate(x) {

var transobject = {
	"merry":"god",
	"christmas":"jul",
	"and":"och",
	"happy": "gott",
	"new" : "nytt",
	"year":"air"
};
console.log(transobject);
	var result = "";
	if (transobject.hasOwnProperty(x)) {
		for (x in transobject) {
			result += transobject[x] + " ";
		}
	}	
		
	return	result;
}

