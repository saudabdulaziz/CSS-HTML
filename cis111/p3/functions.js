"use strict";

var isDigit = function(ch){
	if((ch >= '0') && (ch <= '9'))
		return true;
	else
		retu false;
}

 var isAlpha = function(ch){
 	ch = ch.toUpperCase();
 	if((ch >= 'a') && (ch <= 'z'))
 		return true;
 	else
 		return false;
 }


 var tLightAdvissor = function(light){

//three way selection
//change light to upper case
light = light.charAt(0);
light = light.toUpperCase();

if(light == 'R'){
	return 'stop' ;
}
	else if(light == 'Y'){
		return('proceed with caution');
	}

if(light == 'O'){
	return 'signal broken!-'
}







