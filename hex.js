function getRGB(x) {

	
	var r = "";
	r = x[1] + x[2];

	var g = "";
	g = x[3] + x[4];

	var b = "";
	b = x[5] + x[6];

	var totalHEX = "";
	totalHEX= r+g+b;

	r=checkRGB(r);
	g=checkRGB(g);
	b=checkRGB(b);
	

	function checkRGB(y) {
		if (y=="00") {
			return "0";
		};
		if (y=="FF") {
			return "255";
		};
	}

	function checkColor(z) {

		if (z=="000000") {
			return "Black";
			}

		if (z=="FFFFFF") {
			return "White";
			}

		if (z=="FF0000") {
			return "Red";
			}

		if (z=="00FF00") {
			return "Green";
			}

		if (z=="0000FF") {
			return "Blue";
			}
		}
		



	console.log("rgb(" + r + "," + g + "," + b + ")");
}
	















































