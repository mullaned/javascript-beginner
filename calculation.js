function calac() {
	var sum = 0;
	var elements = "";
	for (var i = 0; i <=500; i+=23) {
		sum += i;
		elements += "\t" + i;
		

	};
	console.log("Elements : " + elements);
	console.log("Sum : " + sum);
}