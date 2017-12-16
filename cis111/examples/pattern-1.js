"use strict";

//1. Define the onclick handler:
//this function does not accept an argument, does not return a value
function greet2(){
    //initialize the result string
    var resultStr = '';

	//get the user's name from the text box
	var fname = document.getElementById('inputBox').value;

    //build the result string
	resultStr = 'Hello ' + fname 
	   + ', welcome to my page. May I call you ' 
	   + '<i>' + fname + '?' + '</i>';

    //insert the result string into the div
	document.getElementById('outputDiv').innerHTML = resultStr;
}


//2. select the button
var button1 = document.getElementById("btn1");

//3. register onclick handler
//a function reference works here because
//you do not have to pass an argument to the function
button1.onclick = greet2;