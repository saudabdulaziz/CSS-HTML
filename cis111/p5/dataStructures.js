//p5,A

function arrAvg (arg){
	var retval = 0
	for (var i =0 ; i< arg.length; ++i){
		retval+=arg [i] ;
	}
	retval/= arg.length;
	return retval;

}


//p5,B
function oneCharPerLine (arg){
	var retval = "";
	for (var i = 0 ; i < arg.length; ++i){
		retval += arg [i] + '\n';

	}
	return retval;
}

//p5,C

var ltrToNATO = function(ltr){
	ltr = ltr.toLowerCase();
	
	var objNATO = {"a": "Alpha", "b":"Bravo", "c": "Charley", "d": "Delta", "e":"Echo","f": "Foxtrot",
	"g": "Golf", "h":"Hotel", "i": "India", "j": "Juliett", "k": "Kilo", "l": "Lima", "m": "Mike", "n": "November", "o": "Oscar", "p": "Papa", "q": "Quebec",
	 "r": "Romeo", "s": "Sierra", "t": "Tango", "u": "Uniform", "v": "Victor", "w": "Whiskey", "x": "X-ray", "y": "Yankee", "z": "Zulu", "0":"Zero", "1": "one",
	 "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Niner"};

	if(objNATO[ltr] == undefined){
	 	return ltr;
	}
	else{
    	return objNATO[ltr]
	}
}
    

//P5,D
var wordToNATO1 = function(W){
	var result = '';
	W = W.toLowerCase();

	var arr = W.split('');

	for (var i = 0; i < arr.length; ++i)
		result = result + ltrToNATO(W[i]) + ' ';

	if(result.length!=0){
		result=result.substring(0, result.length-1);
	}
	return result

}

//P5,E
var wordToNATO2 = function(W){
	var result = "";
	W = W.toLowerCase();

	var arr = W.split('');

	for (var i = 0; i < arr.length; ++i)
		if(ltrToNATO(W[i]) != undefined)
		result = result + ltrToNATO(W[i]) + " ";
		else 
			result = result + W[i] + " ";

if(result.length!=0){
		result=result.substring(0, result.length-1);
	}


	return result

}
//steps D & E are using ltrToNATO function.