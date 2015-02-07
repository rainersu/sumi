
define(function () {'use strict';
	
return function (x, y) {
	var l = (x & 0xFFFF) + (y & 0xFFFF),
		m = (x >> 16) + (y >> 16) + (l >> 16);
	return  (m << 16) | (l & 0xFFFF);
};

});

/**
* 以类 C 语言语法计算两个 32 位整数的相加。使用 16 位内操作以解决某些 Javascript 解译环境的 Bug 。
* @see {@link external:Math.imul}
* @access public
* @func Sumi.Math.iadd
* @param {number} a - 32 位整数
* @param {number} b - 32 位整数
* @returns {number}
* @example
* console.log(Math.iadd(20, 30));    // 50
*/
