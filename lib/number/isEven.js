
define([
	'./isInteger'
], function (I) {
	
return Number.isEven = function(val) {
	var v = +val;
	return I(v) &&  !(v % 2);
};

});
	
/**
* 判断指定变量是否是偶数。
* @see {@link external:Number.isOdd}
* @access public
* @func external:Number.isEven
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Number.isEven(0));                           // true
* console.log(Number.isEven(1));                           // false
* console.log(Number.isEven(2));                           // true
* console.log(Number.isEven(3));                           // false
* console.log(Number.isEven(4));                           // true
* console.log(Number.isEven(5));                           // false
*/
