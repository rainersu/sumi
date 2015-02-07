
define(function () {'use strict';

return function(l, i) {
	l = l >>> 0;
	if (arguments.length < 2) i = '';
	for(var r = new Array(l); l--;) {
		r[l] = i;
	}
	return r;
};

});

/**
* 创建一个指定长度的新数组，并用指定值批量初始化所有元素。
* @see {@link Sumi.Array.matrix}
* @see {@link Sumi.Array.range}
* @see {@link Sumi.String.dim}
* @see {@link external:String#repeat}
* @access public
* @func Sumi.Array.dim
* @param {number} [len = 0] - 数组长度
* @param {*} [initial = ''] - 初始化值
* @returns {array}
* @example
* console.log(Sumi.Array.dim());              // []
* console.log(Sumi.Array.dim(3));             // [ '', '', '' ]
* console.log(Sumi.Array.dim(3, 88));         // [ 88, 88, 88 ]
* console.log(Sumi.Array.dim(2, undefined));  // [ undefined, undefined ]
*/
