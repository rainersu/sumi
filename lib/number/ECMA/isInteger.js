
define(
[
	'./isFinite'
]
, function (
	isFinite
) 
{'use strict';
	
return function (v) {
	return isFinite(v) && Math.floor(v) == v;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断数值是否是整数。
* @see {@link external:Number.isInteger}
* @see {@link external:Number.isSafeInteger}
* @see {@link external:Number.isFinite}
* @see {@link Sumi.Core.type}
* @access public
* @func external:Number.isInteger
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Number.isInteger(NaN));               // false
* console.log(Number.isInteger(Infinity));          // true
* console.log(Number.isInteger(3));                 // true
* console.log(Number.isInteger(3.3 >> 0));          // true
* console.log(Number.isInteger(new Number(3)));     // true
*/