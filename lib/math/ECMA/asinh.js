	
define(function () {'use strict';
	
return function(x) {
	return x === -1 / 0 ? x : Math.log(x + Math.sqrt(x * x + 1));
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的双曲反正弦值。
* @see {@link external:Math.acosh}
* @see {@link external:Math.atanh}
* @see {@link external:Math.cosh}
* @see {@link external:Math.tanh}
* @see {@link external:Math.sinh}
* @access public
* @func external:Math.asinh
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.asinh(1));   // 0.881373587019543
* console.log(Math.asinh(0));   // 0
*/
