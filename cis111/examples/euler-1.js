
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







var myArray = [4, 8, 15, 16, 23, 42];
for(var i = 0; i < myArray.length; ++i)
	myArray[i] = myArray[i] * myArray[i];
//myArray[i]++;