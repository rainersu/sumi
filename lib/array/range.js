
define(function () {

return Array.range = function (min, max, step) {
	var b = arguments.length > 1,
		z = min >>  0,
		x = b ? z : 0,
		y = b ? max >> 0 : z,
		a = Math.abs(step >> 0 || 1),
		r = [],
		n = (y - 1 - x) / a >> 0,
		i = 0;
	if (n < 0) a = -a;
	n = Math.abs(n);
	while (i <= n) {
		r[i++] = x;
		x+= a;
	}
	return r;
};

});

/**
* 创建一个新数组，并用指定的数字序列初始化。
* @see {@link external:Array.dim}
* @see {@link external:Array.matrix}
* @access public
* @func external:Array.range
* @param {number} [min=0] - 数字序列的起始值（被包括）。如果没有指定 max ，则作为 max 值，并将 0 作为 min 值
* @param {number} [max] - 数字序列的上限值（不包括）
* @param {number} [step=1] - 步进增量
* @returns {number[]}
* @example
* console.log(Array.range(3));          // [ 0, 1, 2 ]
* console.log(Array.range(0,  3));      // [ 0, 1, 2 ]	
* console.log(Array.range(0, 20,  5));  // [ 0, 5, 10, 15 ]
* console.log(Array.range(0,  8,  3));  // [ 0, 3, 6 ]
* console.log(Array.range(0, 10,  3));  // [ 0, 3, 6, 9 ]
* console.log(Array.range(0, 10, -3));  // [ 0, 3, 6, 9 ]
*/
