
define(function () {'use strict';

return function (f, t) {
	var o = Object(this),
		l = o.length >>> 0, 
		a = [], 
		i = 0, 
		v;
	for(; i < l; i++) {
		if (i in o && f.call(t, v = o[i], i, o)) a.push(v);
	}
	return a;		
};

});

/**
* ECMAScript 5.1 Standard <br>
* 对当前数组进行条件筛选，将筛选出的元素依原次序创建出一个新数组。
* @see {@link Sumi.Array.uniq}
* @see {@link Sumi.Array.unique}
* @access public
* @func external:Array.prototype.filter
* @param {external:Array~someCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {array}
* @example
* function f(e) { return e > 5; }
* console.log([2, 5, 8, 3, 7].filter(f));                // [ 8, 7 ]
* console.log(Array.prototype.filter.call('25837', f));  // [ '8', '7' ]
*/
