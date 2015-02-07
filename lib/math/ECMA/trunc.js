
define(function () {'use strict';
	
return function(x) {
	return x < 0 ? Math.ceil(x) : Math.floor(x);
};

});

/**
* ECMAScript 6 Draft <br>
* 获取数值的整数部分。
* @see {@link Sumi.Math.ceil10}
* @see {@link Sumi.Math.round10}
* @see {@link Sumi.Math.floor10}
* @access public
* @func external:Math.trunc
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.trunc(Number.EPSILON));   //  0
* console.log(Math.trunc(-12e2));            // -1200
* console.log(Math.trunc(NaN));              //  NaN
*/
