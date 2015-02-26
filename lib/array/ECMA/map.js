
define(function () {'use strict';

return function (f, t) {
	var o = Object(this),
		l = o.length >>> 0,
		r = Array(l);
	for(; l--;) {
		if (l in o) r[l] = f.call(t, o[l], l, o);
    }
	return r;		
};

});

/**
* ECMAScript 5.1 Standard <br>
* 基于对当前数组内元素依次执行回调函数后的返回结果创建出一个新数组。
* @see {@link external:Array#map}
* @see {@link external:Array#reduce}
* @see {@link external:Array#reduceRight}
* @access public
* @func external:Array.prototype.map
* @param {external:Array~reduceCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {array} 映射出的新数组
* @example
* console.log([1, 4, 9].map(Math.sqrt));        // [ 1, 2, 3 ]
* console.log([].map.call('149', Math.sqrt));   // [ 1, 2, 3 ]
*/


