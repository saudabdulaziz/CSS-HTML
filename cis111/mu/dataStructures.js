
//Mu,A


function arrMax (arg){
	if (arg.length === 0){
		return;
	}
	var currentMax= arg[0];
	for( var i = 1; i<arg.length; ++i){
		if(arg [i]> currentMax){
			currentMax = arg[i];
		}
	}
	return currentMax
}

//mu,B
function allOdd (arg){
	for(var i=0; i<arg.length;++i){
		if(arg[i]%2==0){
			return false;
		}
	}
	return true;
}
//mu,C
function maxString (arg){
		if (arg.length === 0){
		return;
	}
	var currentMax= arg[0].length;
	var currentstring= arg[0];
	for( var i = 1; i<arg.length; ++i){
		if(arg [i].length> currentMax){
			currentstring = arg[i];
			currentMax = arg[i].length;
		}
	}
	return currentstring;
}

//mu,D & E
function maxWord (arg){
	function maxString (arg){
		if (arg.length === 0){
			return;
		}
		var currentMax= arg[0].length;
		var currentstring= arg[0];
		for( var i = 1; i<arg.length; ++i){
			if(arg [i].length> currentMax){
				currentstring = arg[i];
				currentMax = arg[i].length;
			}
		}
		return currentstring;
	}
	return maxString(arg.split(" "));
}

function maxWordLength(arg){

	function maxWord (arg){
		function maxString (arg){
			if (arg.length === 0){
				return;
			}
			var currentMax= arg[0].length;
			var currentstring= arg[0];
			for( var i = 1; i<arg.length; ++i){
				if(arg [i].length> currentMax){
					currentstring = arg[i];
					currentMax = arg[i].length;
				}
			}
			return currentstring;
		}
		return maxString(arg.split(" "));
	}
	return maxWord(arg).length;

}

