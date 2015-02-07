
define(
[
	'./ECMA/isInteger'
]
, function (
		isInteger
) 
{'use strict';
	
return function (v) {
	var n = 2,
		q;
	v = +v;
	if(!isInteger(v) || v < 2) return false;
	q = Math.sqrt(v);
	while (n <= q) {
		if(v % n++ < 1) return false;
	}
	return true;
};

});

/**
* 判断指定变量是否是质数。
* @see {@link Sumi.Number.isOdd}
* @see {@link Sumi.Number.isEven}
* @see {@link Sumi.Number.isComposite}
* @access public
* @func Sumi.Number.isPrime
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Sumi.Number.isPrime(0));    // false
* console.log(Sumi.Number.isPrime(1));    // false
* console.log(Sumi.Number.isPrime(2));    // true
* console.log(Sumi.Number.isPrime(3));    // true
* console.log(Sumi.Number.isPrime(4));    // false
* console.log(Sumi.Number.isPrime(5));    // true
* console.log(Sumi.Number.isPrime(6));    // false
* console.log(Sumi.Number.isPrime(7));    // true
* console.log(Sumi.Number.isPrime(8));    // false
* console.log(Sumi.Number.isPrime(9));    // false
*/
