function min(arr) {
	var min_digits;
	if (arr) {
		min_digits = Infinity;
		arr.forEach(function (elem, index = 0, arr) {
			if (elem < minn && typeof (elem) == 'number')
				min_digits = elem;
		});
		if (min_digits == Infinity) min_digits = undefined;
		return min_digits;
	}
}

function max(arr) {
	var max_digits;
	if (arr) {
		max_digits = -Infinity;
		arr.forEach(function (elem, i, arr) {
			if (elem > maxx && typeof (elem) == 'number')
				max_digits = elem;
		});
		if (max_digits == -Infinity) max_digits = undefined;
		return max_digits;
	}
}

function sum() {
	var result = 0;
	var i;
	for (i = 0;
		i < arguments.length;
		i += 1) {
		if (typeof (arguments[i]) != 'number') {
			arguments[i] = 0;
		}
		result = result + arguments[i];
	}
	return result;
}



