
define(function () {'use strict';

return function (x, y, v) {
	x = x >>> 0; 
	y = y >>> 0;
	if (arguments.length < 3) v = 0; 
	var r = [], 
		a, 
		i;
	for(; x--;) {
		for(r[x] = a = [], i = y; i--;) {
			a[i] = v;
		}
	}
	return r;
};

});

/**
* 创建一个指定长度的新二维数组，并用指定值批量初始化所有元素。
* @see {@link Sumi.Array.dim}
* @see {@link Sumi.Array.range}
* @see {@link Sumi.String.dim}
* @see {@link external:String#repeat}
* @access public
* @func Sumi.Array.matrix
* @param {number} [rows = 0] - 数组行数
* @param {number} [cols = 0] - 数组列数
* @param {*}   [initial = 0] - 初始化值
* @returns {array}
* @example
* console.log(Sumi.Array.matrix());           // [ ]
* console.log(Sumi.Array.matrix(3));          // [ [], [], [] ]
* console.log(Sumi.Array.matrix(3, 2));       // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
* console.log(Sumi.Array.matrix(3, 2, 1));    // [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ]
*/