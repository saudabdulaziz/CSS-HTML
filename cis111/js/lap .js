function loopOne(){
	var counter = 10;
	var sum = 1;
	while(counter >= 1){
		sum = sum + counter;
		console.log(counter);
		counter = counter - 1;
	}
}


function loopTwo(){

	for(var counter = 10; counter>10; counter= counter-1){
		console.log(counter);
	}
}