'use strict';

           
describe('The function', function () {
	//Minimal
	describe('`min`', function () {
		var arr,
			minValue;
            
        it('is defined', function () {
            expect(min).toBeDefined();
        });
                    
		describe('correctly finds minimal values in arrays of numbers', function () {
			it('[10, 45, 55, 100, 66, 4, 99]', function () {
				arr = [10, 45, 55, 100, 66, 4, 99];
				minValue = min(arr);
				expect(minValue).toBe(4);
			});

			it('[10.5, 45, 55.2, 100, 66, 99]', function () {
				arr = [10.5, 45, 55.2, 100, 66, 99];
				minValue = min(arr);
				expect(minValue).toBe(10.5);
			});

			it('[0, 45, 55.2, 100, 66, -1]', function () {
				arr = [0, 45, 55.2, 100, 66, -1];
				minValue = min(arr);
				expect(minValue).toBe(-1);
			});

			it('[45, 0, 100, 66, 1]', function () {
				arr = [45, 0, 100, 66, 1];
				minValue = min(arr);
				expect(minValue).toBe(0);
			});

			it('[0, 45, 55.2, 100, 66, -1]', function () {
				arr = [0, 45, 55.2, 100, 66, -1];
				minValue = min(arr);
				expect(minValue).toBe(-1);
			});
		});

		describe('correctly finds minimal values in arrays of different types', function () {
			var arr,
				minValue;

			it('[10, 45, , , 66, 4, 99]', function () {
				arr = [10, 45, , , 66, 4, 99];
				minValue = min(arr);
				expect(minValue).toBe(4);
			});

			it('[null, false, "4", undefined, true, 99, 524]', function () {
				arr = [null, false, "4", undefined, true, 99, 524];
				minValue = min(arr);
				expect(minValue).toBe(99);
			});
		});

		it('returns `undefined` in an empty array', function () {
			arr = [];
			minValue = min(arr);
			expect(minValue).toBeUndefined();
		});

		it('returns `undefined` if an array is not defined', function () {
			minValue = min();
			expect(minValue).toBeUndefined();
		});
	});

	//Maximal
	describe('`max`', function () {
		var arr,
			minValue;

        it('is defined', function () {
            expect(max).toBeDefined();
        }); 

		describe('correctly finds maximal values in arrays of numbers', function () {
			it('[10, 45, 55, 100, 66, 4, 99]', function () {
				arr = [10, 45, 55, 100, 66, 4, 99];
				minValue = max(arr);
				expect(minValue).toBe(100);
			});

			it('[10.5, 45, 55.2, 100.6, 66, 99]', function () {
				arr = [10.5, 45, 55.2, 100.6, 66, 99];
				minValue = max(arr);
				expect(minValue).toBe(100.6);
			});

			it('[0, 45, 55.2, 100, 66, -1]', function () {
				arr = [0, 45, 55.2, 100, 66, -1];
				minValue = max(arr);
				expect(minValue).toBe(100);
			});

			it('[-45, 0, -100, -66, -1]', function () {
				arr = [-45, 0, -100, -66, -1];
				minValue = max(arr);
				expect(minValue).toBe(0);
			});

			it('[0, 45, 55.2, 100, 66, -1]', function () {
				arr = [0, 45, 55.2, 100, 66, -1];
				minValue = max(arr);
				expect(minValue).toBe(100);
			});
		});

		describe('correctly finds maximal values in arrays of different types', function () {
			var arr,
				minValue;

			it('[10, 45, , , 66, 4, 99]', function () {
				arr = [10, 45, , , 66, 4, 99];
				minValue = max(arr);
				expect(minValue).toBe(99);
			});

			it('[null, false, "4", undefined, true, 99, 6]', function () {
				arr = [null, false, "4", undefined, true, 99];
				minValue = max(arr);
				expect(minValue).toBe(99);
			});
		});

		it('returns `undefined` in an empty array', function () {
			arr = [];
			minValue = max(arr);
			expect(minValue).toBeUndefined();
		});

		it('returns `undefined` if an array is not defined', function () {
			minValue = max();
			expect(minValue).toBeUndefined();
		});
	});

	//A sum
	describe('`sum`', function () {
		var result;
        
        it('is defined', function () {
            expect(sum).toBeDefined();
        });
        
		describe('correctly sums numbers', function () {
			it('10, 45, 55, 100, 66, 4, 99', function () {
				result = sum(10, 45, 55, 100, 66, 4, 99);
				expect(result).toBe(379);
			});

			it('10.5, 45, 55.2, 100.6, 66, 99', function () {
				result = sum(10.5, 45, 55.2, 100.6, 66, 99);
				expect(result).toBe(376.3);
			});

			it('0, 45, 55.2, 100, 66, -1', function () {
				result = sum(0, 45, 55.2, 100, 66, -1);
				expect(result).toBe(265.2);
			});

			it('-45, 0, -100, -66, -1', function () {
				result = sum(-45, 0, -100, -66, -1);
				expect(result).toBe(-212);
			});

			it('0, 45, 55.2, 100, 66, -1', function () {
				result = sum(0, 45, 55.2, 100, 66, -1);
				expect(result).toBe(265.2);
			});
		});

		describe('correctly sums values ignoring not number types', function () {
			var arr,
				minValue;

			it('null, false, "4", undefined, true, 99, 6', function () {
				result = sum(null, false, "4", undefined, true, 99, 6);
				expect(result).toBe(105);
			});
		});

		it('returns the same value for a single argument', function () {
			result = sum(55);
			expect(result).toBe(55);
		});

		it('returns 0 if argument 0 is passed', function () {
			result = sum(0);
			expect(result).toBe(0);
		});

		it('returns 0 if arguments are not defined', function () {
			result = sum();
			expect(result).toBe(0);
		});
	});
});