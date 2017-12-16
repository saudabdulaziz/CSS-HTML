"use strict";

//1. Define the onclick handler:
var centsToDollars = function(){
	var cents = Number(document.getElementById('inputBox').value);
	//console.log(typeof(cents));
	var dollars = Math.floor(cents / 100);
	console.log(dollars);
	var pence = cents % 100
	//display result
	document.getElementById("outputDiv").innerHTML =
	( dollars + " dollars and " + pence + " cents.");

}


//2. select the button
var button1 = document.getElementById("btn1");

//3. register onclick handler
//a function reference works here because
//you do not have to pass an argument to the function
button1.onclick = centsToDollars;



