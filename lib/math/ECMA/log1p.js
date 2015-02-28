
define(function () {'use strict';
	
return Math.log1p = Math.log1p || function(x) {
	return Math.log(1 + x);
};

});

/**
* ECMAScript 6 Draft <br>
* 计算 1 + x 的自然对数。
* @see {@link external:Math.log10}
* @see {@link external:Math.log2}
* @access public
* @func external:Math.log1p
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.log1p(1));     // 0.6931471805599453
* console.log(Math.log1p(0));     // 0
* console.log(Math.log1p(-1));    // -Infinity
* console.log(Math.log1p(-2));    // NaN
*/
