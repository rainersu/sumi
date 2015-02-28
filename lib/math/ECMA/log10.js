
define(function () {'use strict';
	
return Math.log10 = Math.log10 || function(x) {
	return Math.log(x) / Math.LN10;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算以 10 为底的对数。
* @see {@link external:Math.log2}
* @see {@link external:Math.log1p}
* @access public
* @func external:Math.log10
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.log10(2));         // 0.3010299956639812
* console.log(Math.log10(1));         // 0
* console.log(Math.log10(0));         // -Infinity
* console.log(Math.log10(-2));        // NaN
* console.log(Math.log10(100000));    // 5
*/
