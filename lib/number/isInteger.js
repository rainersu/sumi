
define([
	'./isFinite'
], function (I) {
	
return Number.isInteger = Number.isInteger || function(v) {
	return I(v) && Math.floor(v) == v;
};

});

/**
* * ECMAScript 6 Draft <br> 6 Draft
* 判断数值是否是整数。
* @see {@link external:Number.isSafeInteger}
* @access public
* @func external:Number.isInteger
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Number.isInteger(NaN));               // false
* console.log(Number.isInteger(Infinity));          // true
* console.log(Number.isInteger(3));                 // true
* console.log(Number.isInteger(new Number(3)));     // true
*/