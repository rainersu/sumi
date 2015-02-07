
define(function () {'use strict';
	
return function(i) {
	i = i >>> 0;
	var r = 1;
	while(i > 1) {
		r*= i--;
	}
	return r;
};

});

/**
* 计算阶乘值。
* @see {@link Sumi.Math.fibonacci}
* @access public
* @func Sumi.Math.factorial
* @param {number} int - 要计算阶乘的自然数
* @returns {number}
* @example
* console.log(Sumi.Math.factorial(0));    // 1
* console.log(Sumi.Math.factorial(1));    // 1
* console.log(Sumi.Math.factorial(3));    // 6
*/
