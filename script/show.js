//show.js
//this file is used to show the year of the map, and the map itself.
//the map updated when the slider moves.
//The default is at 1914
var slider = document.getElementById("slidebar");

slider.oninput = function() {
	document.getElementById("counter").innerHTML = slider.value;
	
	switch (slider.value) {
		case "1914":
		document.getElementById("map").src = "images/1914.jpg";
		break;
		
		case "1915":
		document.getElementById("map").src = "images/1915.jpg";
		break;

		case "1916":
		document.getElementById("map").src = "images/1916.jpg";
		break;

		case "1917":
		document.getElementById("map").src = "images/1917.jpg";
		break;

		case "1918":
		document.getElementById("map").src = "images/1918.jpg";
		break;
	} 
}

