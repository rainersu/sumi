
define(function () {'use strict';

return function(a) {
	var r = [],
		l = a.length,
		i = 0;
	for (; i < l; i++) if (i in a) r.push(a[i]);
	return r;
};

});

/**
* 清理数组中没有对应元素的索引编号，返回为新数组。
* @see {@link Sumi.Array.unique}
* @see {@link Sumi.Array.uniq}
* @access public
* @func Sumi.Array.clean
* @param {object} arr - 数组或类数组对象
* @returns {array} 
* @example
* var x = [1];
* x[8] = 9;
* console.log(x);          // [ 1, , , , , , , , 9 ]
* x = Sumi.Array.clean(x);
* console.log(x);          // [ 1, 9 ]
*/