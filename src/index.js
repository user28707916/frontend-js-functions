function min (arr) {
	if (arr) {
    minn = Infinity;
    arr.forEach(function (elem, index=0, arr) {
		if (elem < minn && typeof(elem) == 'number')
		minn=elem; 
	});
	if (minn == Infinity) minn = undefined;  
    return minn;
	}
}

function max (arr) {
	if (arr) {
	maxx = -Infinity;
	arr.forEach(function (elem,i, arr) {
	    if (elem > maxx && typeof(elem) == 'number') 
		maxx=elem;
	});
	if (maxx == -Infinity) maxx = undefined;  
    return maxx;
	}
}

function sum(){
		var result = 0;
        var index = 0;
		for (i = 0; 
		    i < arguments.length;
		    i += 1){
			if(typeof(arguments[i]) != 'number'){
				arguments[i] = 0;
			}
			result = result + arguments[i];
		}
		return result;
}



