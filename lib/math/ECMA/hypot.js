
define(function () {'use strict';
	
return Math.hypot = Math.hypot || function () {
	var a = arguments,
		i = a.length,
		r = 0;
	for (; i--;) {
		r+= a[i] * a[i];
	}
	return Math.sqrt(r);
};

});

/**
* ECMAScript 6 Draft <br>
* 返回所有参数平方和的平方根。
* @access public
* @func external:Math.hypot
* @param {...number} x - 数字
* @returns {number}
* @example
* console.log(Math.hypot(3, 4));            // 5
* console.log(Math.hypot(3, 4, 5));         // 7.0710678118654755
* console.log(Math.hypot());                // 0
* console.log(Math.hypot(NaN));             // NaN
* console.log(Math.hypot(3, 4, "foo"));     // NaN, +"foo" => NaN
* console.log(Math.hypot(3, 4, "5"));       // 7.0710678118654755
* console.log(Math.hypot(-3));              // 3
*/
	