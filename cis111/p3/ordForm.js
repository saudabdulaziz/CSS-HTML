"use strict";

var ordForm = function(n){
	if ((n % 10 == 1) && (n % 100 !=11))
		return n + 'st';
	else(n % 10 == 2)
		return n + "nd";
}

//select the button
var button1 = document.getElementById("btn1")
//problem
// a function reference offers no way to pass an argument to the function.
//This won't work
//button1.onclick = isEvan;

//solution: rigester onclick handler with a function literal
button1.onclick = function(){
	//console.log('Calling isEvan.');
	document.getElementById('outputDiv').innerHTML =
	ordForm(document.getElementById('inputBox').value);
};
