


//P4,A
function whileloop(){
	var counter = 1;
	while(counter <= 10){
		console.log(counter);
		counter = counter + 1;
	}
}


function forloop(){
	for(var counter = 10; counter>0; counter= counter-1){
		console.log(counter);
	}
}

//retuns the sum of the natural numbers 1 ... k
var euler1 = function(k){
var sum = 0;

	//generate and test 1 .. 1000
	for(var n =1; n < k; ++n){
		//test
		if ((n % 3 == 0) || (n % 5 == 0))
		sum = sum + n;
}

// display result
return sum;
}

console.log(euler1(10));





//P4,B

function countRange (low, high){
	var i = '';
	for( var k = low; k < high; ++k){
		i +=k + ' ';
	}
	if (low <= high){
		i+=high
	}
	return i;
}

//P4,C

function countRange2 (low, high){
	if (low > high){
		var i = '';
		for( var k = low; k > high;--k){
			i+=k + ' ';
		}
		i+=high;
		return i;
	}

	else{
		function countRange (low, high){
			var i = '';
			for( var k = low; k < high; ++k){
				i +=k + ' ';
			}
			if (low <= high){
				i+=high
			}
			return i;
		}
		return countRange (low, high);	
	}
}
//P4,D
function wordRep (x){
	var retval = '';
	for(var i=0; i< x.length-1; ++1 ){
		retval += x+' ';

	}
	retval +=x;
	return retval;

}

//P4,E
function _suffix (x){
	if ( x % 10 == 1)
		return x+"st";
	else if ( x % 10 == 2)
		return x+"nd";
	else if ( x % 10 == 3)
		return x+"rd";
	else return x+"th";
}
function suffix(x){

	if (x >= 0)
		return _suffix(x);
	else return"-"+_suffix(x*-1)
}
function ordinalRange (low, high){
	var i = '';
	for( var k = low; k < high; ++k){
		i +=suffix(k) + ' ';
	}
	if (low <= high){
		i+=suffix (high);
	}
	return i;
}

//P4,F

function sumOfSquares (n){

	var retval=0;
	for(var i=1; i<=n;++i){
		retval += i*i;
	}
	return retval;
}
//P4,G

function Pow (base, exponent){
	var retval=1;
	for( var i=0;i<exponent;++i){
		retval *= base;
	}
	return retval;

}
