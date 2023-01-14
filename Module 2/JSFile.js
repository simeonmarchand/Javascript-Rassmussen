function myJSFunction() {
	// gets user input and stores the variable
	var fName = prompt('What is your name?');

	// uses the input from the user to and prints the information given
	alert('Hello ' + fName + '!')

	// storing the Pi value
	const piValue = 3.1415926;

	// whats your favorite number?
	var myFavNum = prompt('What is your favorite number?');

	// calculate the area
	let myArea = piValue * myFavNum * 2;

	// Prints out the below message
	alert('Hi ' + fName + ', you entered ' + myFavNum + ' as your favorite number. If your favorite number was the radius fo a circle, the area would be ' + myArea);
}