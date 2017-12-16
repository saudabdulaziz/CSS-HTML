function numOfWilsons (arg){
	return Math.floor(arg/10000000);
}
function numOfChases (arg){
	return Math.floor(arg/1000000);
}
function numOfMadisons (arg){
	return Math.floor(arg/500000);
}
function numOfClevelands (arg){
	return Math.floor(arg/100000);
}
function numOfMcKinleys (arg){
	return Math.floor(arg/50000);
}
function numOfFranklins (arg){
	return Math.floor(arg/10000);
}
function numOfGrants (arg){
	return Math.floor(arg/5000);
}
function numOfJacksons (arg){
	return Math.floor(arg/2000);
}
function numOfHamiltons (arg){
	return Math.floor(arg/1000);
}
function numOfLincolns (arg){
	return Math.floor(arg/500);
}
function numOfJeffersons (arg){
	return Math.floor(arg/200);
}
function numOfWashingtons (arg){
	return Math.floor(arg/100);
}
function numOfHalfDollars(arg){
	return Math.floor(arg/50);
}
function numOfQuarters(arg){
	return Math.floor(arg/25);
}
function numOfDimes(arg){
	return Math.floor(arg/10);
}
function numOfNickels(arg){
	return Math.floor(arg/5);
}
function numOfPennies(arg){
	return arg;
}

function verbalizeCash (arg){

	var retval= "";

	var currentBill = numOfWilsons(arg);
	if(currentBill==1){
		retval+= currentBill+" wilson, ";
	}
	if(currentBill>1){
		retval+= currentBill+" wilsons, ";
	}
	arg -= 10000000*currentBill;


	currentBill = numOfChases(arg);
	if(currentBill==1){
		retval+= currentBill+" chase, ";
	}
	if(currentBill>1){
		retval+= currentBill+" chases, ";
	}
	arg -= 1000000*currentBill;

	currentBill = numOfMadisons(arg);
	if(currentBill==1){
		retval+= currentBill+" Madison, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Madisons, ";
	}
	arg -= 500000*currentBill;

	currentBill = numOfClevelands(arg);
	if(currentBill==1){
		retval+= currentBill+" Cleveland, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Clevelands, ";
	}
	arg -= 100000*currentBill;

	currentBill = numOfMcKinleys(arg);
	if(currentBill==1){
		retval+= currentBill+" McKinley, ";
	}
	if(currentBill>1){
		retval+= currentBill+" McKinleys, ";
	}
	arg -= 50000*currentBill;


	currentBill = numOfFranklins(arg);
	if(currentBill==1){
		retval+= currentBill+" Franklin, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Franklins, ";
	}
	arg -= 10000*currentBill;



	currentBill = numOfGrants(arg);
	if(currentBill==1){
		retval+= currentBill+" Grant, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Grants, ";
	}
	arg -= 5000*currentBill;

	currentBill = numOfJacksons(arg);
	if(currentBill==1){
		retval+= currentBill+" Jackson, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Jacksons, ";
	}
	arg -= 2000*currentBill;

	currentBill = numOfHamiltons(arg);
	if(currentBill==1){
		retval+= currentBill+" Hamilton, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Hamiltons, ";
	}
	arg -= 1000*currentBill;

	currentBill = numOfLincolns(arg);
	if(currentBill==1){
		retval+= currentBill+" Lincoln, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Lincolns, ";
	}
	arg -= 500*currentBill;


	currentBill = numOfJeffersons(arg);
	if(currentBill==1){
		retval+= currentBill+" Jefferson, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Jeffersons, ";
	}
	arg -= 200*currentBill;

	currentBill = numOfWashingtons(arg);
	if(currentBill==1){
		retval+= currentBill+" Washington, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Washingtons, ";
	}
	arg -= 100*currentBill;

	currentBill = numOfHalfDollars(arg);
	if(currentBill==1){
		retval+= currentBill+" Halfdollar, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Halfdollars, ";
	}
	arg -= 50*currentBill;

	currentBill = numOfQuarters(arg);
	if(currentBill==1){
		retval+= currentBill+" Quarter, "; 
	}
	if(currentBill>1){
		retval+=currentBill+" Quarters"
	}
	arg -= 25*currentBill;

	currentBill = numOfDimes(arg);
	if(currentBill==1){
		retval+= currentBill+" Dime, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Dimes, ";
	}
	arg -= 10*currentBill;

	currentBill = numOfNickels(arg);
	if(currentBill==1){
		retval+= currentBill+" Nickel, ";
	}
	if(currentBill>1){
		retval+= currentBill+" Nickels, ";
	}
	arg -= 5*currentBill;
	

	currentBill = numOfPennies(arg);
	if(currentBill==1){
		retval+= currentBill+" penny, ";
	}
	if(currentBill>1){
		retval+= currentBill+" pennies, ";
	}
	arg -= 5*currentBill;
	
	if (retval.length>0){
		retval=retval.substring(0,retval.length-1)
	}
	return retval;
}


	function outputverbalizeCash(arg){

		document.getElementById("outputDiv").innerHTML = verbalizeCash(arg);
	}
	$("btn1").onclick = function(){
		outputverbalizeCash(document.getElementById("inputBox").value * 100);
	};
