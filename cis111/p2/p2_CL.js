"use strict";
//P2, 1A
var fname = prompt('enter your first name');
console.log( 'Hello, ' + fname + '. Welcome to my website')
//P2, 1B:
var fname = prompt('enter your first name');
alert( 'Hello, ' + fname + '. Your name is '
	+ fname.length + ' characters long');
//P2, 1C:
var fname = prompt('enter your first name');
var lname = prompt('enter your last name');
alert('Hello, ' + '<i>' + fname + " " + lname 
 + '</i>. Welcome to my website!');
//p2, 1D
var fname =  prompt('enter your first name');
var lname =  prompt('enter your last name');
var str1 = ("fname.length")
var str2 = ("lname.length")
var mainstr = (fname.length +   + lname.length)
alert('Hello, ' + fname + " " + lname 
	+  '.  Your name is ' + //fname.length + " " + //lname.length 
	mainstr + " " + 'characters.');

//p2, 1E
var fname = prompt('enter your first name');
var lname = prompt('enter your last name');
 alert('<i>' + fname + " " + lname 
 + '</i>.');
//P2, 1F
var a = parseFloat(prompt("enter side a"));
var b = parseFloat(prompt("enter side b"));
var c = parseFloat(prompt("enter side c"));
var s ;
s = (a + b + c) / 2;
console.log(s);
