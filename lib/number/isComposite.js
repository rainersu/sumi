
define(
[
	'./ECMA/isInteger'
]
, function (
		isInteger
) 
{'use strict';
	
return function (val) {
	var n = 2,
		q;
	v = +v;
	if(isInteger(v) && v > 3) {
		q = Math.sqrt(v);
		while(n <= q) {
			if(v % n++ < 1) return true;
		}
	}
	return false;
};

});
	
/**
* 判断指定变量是否是合数。
* @see {@link Sumi.Number.isOdd}
* @see {@link Sumi.Number.isEven}
* @see {@link Sumi.Number.isPrime}
* @access public
* @func Sumi.Number.isComposite
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Sumi.Number.isComposite(0));      // false
* console.log(Sumi.Number.isComposite(1));      // false
* console.log(Sumi.Number.isComposite(2));      // false
* console.log(Sumi.Number.isComposite(3));      // false
* console.log(Sumi.Number.isComposite(4));      // true
* console.log(Sumi.Number.isComposite(5));      // false
* console.log(Sumi.Number.isComposite(6));      // true
* console.log(Sumi.Number.isComposite(7));      // false
* console.log(Sumi.Number.isComposite(8));      // true
* console.log(Sumi.Number.isComposite(9));      // true
*/
