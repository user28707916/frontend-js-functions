function min(arr) {
	var min_digits;
	if (arr) {
		min_digits = Infinity;
		arr.forEach(function (elem, index = 0, arr) {
			if (elem < min_digits && typeof (elem) == 'number')
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
			if (elem > max_digits && typeof (elem) == 'number')
				max_digits = elem;
		});
		if (max_digits == -Infinity) max_digits = undefined;
		return max_digits;
	}
}

function sum() {
	var result = 0;
	var index = 0;
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


