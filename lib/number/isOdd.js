
define(
[
	'./ECMA/isInteger'
]
, function (
		isInteger
) 
{'use strict';
	
return function (v) {
	return isInteger(v = +v) && !!(v % 2);
};

});

/**
* 判断指定变量是否是奇数。
* @see {@link Sumi.Number.isEven}
* @see {@link Sumi.Number.isComposite}
* @see {@link Sumi.Number.isPrime}
* @access public
* @func Sumi.Number.isOdd
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Sumi.Number.isOdd(0));     // false
* console.log(Sumi.Number.isOdd(1));     // true
* console.log(Sumi.Number.isOdd(2));     // false
* console.log(Sumi.Number.isOdd(3));     // true
* console.log(Sumi.Number.isOdd(4));     // false
* console.log(Sumi.Number.isOdd(5));     // true
*/ 
