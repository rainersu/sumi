
define(function () {

return Array.dim = function(len, initial) {
	var a = [], 
		i = 0, 
		l = len >>> 0, 
		v = arguments.length > 1 ? initial : '';
	for(; i < l; i++) {
		a[i] = v;
	}
	return a;
};

});

/**
* 创建一个指定长度的新数组，并用指定值批量初始化所有元素。
* @see {@link external:Array.matrix}
* @see {@link external:Array.range}
* @access public
* @func external:Array.dim
* @param {number} [len = 0] - 数组长度
* @param {*} [initial = ''] - 初始化值
* @returns {array}
* @example
* console.log(Array.dim());                        // []
* console.log(Array.dim(3));                       // [ '', '', '' ]
* console.log(Array.dim(3, 88));                   // [ 88, 88, 88 ]
*/
