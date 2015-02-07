
define(
[
	'./ECMA/isInteger'
]
, function (
		isInteger
) 
{'use strict';
	
return function (v) {
	return isInteger(v = +v) &&  !(v % 2);
};

});
	
/**
* 判断指定变量是否是偶数。
* @see {@link Sumi.Number.isOdd}
* @see {@link Sumi.Number.isComposite}
* @see {@link Sumi.Number.isPrime}
* @access public
* @func Sumi.Number.isEven
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Sumi.Number.isEven(0));     // true
* console.log(Sumi.Number.isEven(1));     // false
* console.log(Sumi.Number.isEven(2));     // true
* console.log(Sumi.Number.isEven(3));     // false
* console.log(Sumi.Number.isEven(4));     // true
* console.log(Sumi.Number.isEven(5));     // false
*/
