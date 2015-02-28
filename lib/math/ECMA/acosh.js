	
define(function () {'use strict';
	
return Math.acosh = Math.acosh || function(x) {
	return Math.log(x + Math.sqrt(x * x - 1));
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的双曲反余弦值。
* @see {@link external:Math.asinh}
* @see {@link external:Math.atanh}
* @see {@link external:Math.cosh}
* @see {@link external:Math.tanh}
* @see {@link external:Math.sinh}
* @access public
* @func external:Math.acosh
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.acosh(-1));   // NaN
* console.log(Math.acosh(0));    // NaN
* console.log(Math.acosh(0.5))   // NaN
* console.log(Math.acosh(1));    // 0
* console.log(Math.acosh(2));    // 1.3169578969248166
*/
