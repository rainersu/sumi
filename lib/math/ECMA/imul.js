
define(function () {'use strict';
	
return function (a, b) {
    var xf = 0xffff,
		ah = (a >>> 16) & xf,
		al = a & xf,
		bh = (b >>> 16) & xf,
		bl = b & xf;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
};

});

/**
* ECMAScript 6 Draft <br>
* 以类 C 语言语法计算两个 32 位整数的相乘。
* @see {@link Sumi.Math.iadd}
* @access public
* @func external:Math.imul
* @param {number} a - 32 位整数
* @param {number} b - 32 位整数
* @returns {number}
* @example
* console.log(Math.imul(2, 4));              // 8
* console.log(Math.imul(-1, 8));             //-8
* console.log(Math.imul(-2, -2));            // 4
* console.log(Math.imul(0xffffffff, 5));     //-5
* console.log(Math.imul(0xfffffffe, 5));     //-10
*/
