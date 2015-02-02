
define(function () {

return Array.matrix = function(rows, cols, initial) {
	var v = arguments.length > 2 ? initial : 0, 
		r = [], 
		a, 
		i, 
		x = rows >>> 0, 
		y = cols >>> 0;
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
* @see {@link external:Array.dim}
* @see {@link external:Array.range}
* @access public
* @func external:Array.matrix
* @param {number} [rows = 0] - 数组行数
* @param {number} [cols = 0] - 数组列数
* @param {*}   [initial = 0] - 初始化值
* @returns {array}
* @example
* console.log(Array.matrix(3, 2));                 // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
* console.log(Array.matrix(3, 2, 1));              // [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ]
*/