
define(function () {'use strict';

return function (l, i) {
	return Array((l >>> 0) + 1).join(arguments.length > 1 ? i : '');
};

});

/**
* 以重复指定初始值一定次数的方式新建字符串。
* @see {@link external:String#repeat}
* @see {@link Sumi.Array.dim}
* @see {@link Sumi.Array.matrix}
* @see {@link Sumi.Array.range}
* @access public
* @func Sumi.String.dim
* @param {number} [len=1] - 重复次数
* @param {*} [initial=''] - 初始化值
* @returns {string}
* @example
* console.log(Sumi.String.dim(1, 'x'));    // x
* console.log(Sumi.String.dim(2, '0x'));   // 0x0x
* console.log(Sumi.String.dim(3, 0x80));   // 128128128
*/