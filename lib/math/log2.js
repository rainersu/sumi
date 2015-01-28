
define(function () {
	
return Math.log2 = Math.log2 || function(x) {
	return Math.log(x) / Math.LN2;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算以 2 为底的对数。
* @see {@link external:Math.log10}
* @see {@link external:Math.log1p}
* @access public
* @func external:Math.log2
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.log2(3));                           // 1.584962500721156
* console.log(Math.log2(2));                           // 1
* console.log(Math.log2(1));                           // 0
* console.log(Math.log2(0));                           // -Infinity
* console.log(Math.log2(-2));                          // NaN
* console.log(Math.log2(1024));                        // 10
*/
