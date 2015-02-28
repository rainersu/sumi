
define(function () {'use strict';
	
return Math.sinh = Math.sinh || function(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的双曲正弦值。
* @see {@link external:Math.acosh}
* @see {@link external:Math.asinh}
* @see {@link external:Math.atanh}
* @see {@link external:Math.cosh}
* @see {@link external:Math.tanh}
* @access public
* @func external:Math.sinh
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.sinh(0));      // 0
* console.log(Math.sinh(1));      // 1.1752011936438014
*/	
