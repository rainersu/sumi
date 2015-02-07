
define(function () {'use strict';

return function (u, v, s) {
	var b = arguments.length > 1,
		z = u >>  0,
		x = b ? z : 0,
		y = b ? v >> 0 : z,
		m = Math.abs,
		a = m(s >> 0 || 1),
		r = [],
		n = (y - 1 - x) / a >> 0,
		i = 0;
	if (n < 0) a = -a;
	n = m(n);
	while (i <= n) {
		r[i++] = x;
		x+= a;
	}
	return r;
};

});

/**
* 创建一个新数组，并用指定的数字序列初始化。
* @see {@link Sumi.Array.dim}
* @see {@link Sumi.Array.matrix}
* @see {@link Sumi.String.dim}
* @see {@link external:String#repeat}
* @access public
* @func Sumi.Array.range
* @param {number} [min=0] - 数字序列的起始值（被包括）。如果没有指定 max ，则作为 max 值，并将 0 作为 min 值
* @param {number} [max] - 数字序列的上限值（不包括）
* @param {number} [step=1] - 步进增量
* @returns {number[]}
* @example
* console.log(Sumi.Array.range(3));          // [ 0, 1, 2 ]
* console.log(Sumi.Array.range(0,  3));      // [ 0, 1, 2 ]	
* console.log(Sumi.Array.range(0, 20,  5));  // [ 0, 5, 10, 15 ]
* console.log(Sumi.Array.range(0,  8,  3));  // [ 0, 3, 6 ]
* console.log(Sumi.Array.range(0, 10,  3));  // [ 0, 3, 6, 9 ]
* console.log(Sumi.Array.range(0, 10, -3));  // [ 0, 3, 6, 9 ]
*/
