
define(function () {'use strict';
	
return Math.atanh = Math.atanh || function(x) {
	return Math.log((1 + x) / (1 - x)) / 2;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的双曲反正切值。
* @see {@link external:Math.acosh}
* @see {@link external:Math.asinh}
* @see {@link external:Math.cosh}
* @see {@link external:Math.tanh}
* @see {@link external:Math.sinh}
* @access public
* @func external:Math.atanh
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.atanh(-2));     // NaN
* console.log(Math.atanh(-1));     // -Infinity
* console.log(Math.atanh(0));      // 0
* console.log(Math.atanh(0.5));    // 0.5493061443340548
* console.log(Math.atanh(1));      // Infinity
* console.log(Math.atanh(2));      // NaN
*/
