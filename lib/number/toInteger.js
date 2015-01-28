
define([
	'../math/trunc'
], function (T) {
	
return Number.toInteger = Number.toInteger || function(v) {
	return T(v);
};

});

/**
* ECMAScript 6 Draft <br>
* 获取数值的整数部分。
* @see {@link external:Number.toFixedLength}
* @see {@link external:Math.trunc}
* @access public
* @func external:Number.toInteger
* @param {number} val - 数值
* @returns {number}
* @example
* console.log(Number.toInteger(Number.EPSILON));        // 0
* console.log(Number.toInteger(-12e2));                 // 1200
* console.log(Number.toInteger(NaN));                   // NaN
*/
