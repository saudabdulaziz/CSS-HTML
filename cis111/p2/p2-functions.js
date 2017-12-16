
//P2, 2A
//define the function
function greetUser(){
	var fname = prompt('enter your first name');
    alert( 'Hello, ' + fname + '. Welcome to my website');
}
//call the function
greetUser();


//P2, 2B
//define the function
function tagUser(){
	var fname = prompt('enter your first name');
	alert('<pre>' + fname + '</pre>')
}
//call the function
 tagUser();

//p2, 2C
//define the function
function AOT(){
	var a = parseFloat(prompt("enter side a"));
var b = parseFloat(prompt("enter side b"));
var c = parseFloat(prompt("enter side c"));
var s ;
s = (a + b + c) / 2;
alert(s);
}

//call the function
AOT();


//p2, 2-D
//define the function
function centsToDollars(){
	var cents = parseInt(prompt('enter number of pennies'));
	var dollars = Math.floor(cents / 100);
	console.log(pence);
	var pence = (cents % 100);
		//display result	
console.log( dollars + " dollars and " + pence + " cents.")

}






