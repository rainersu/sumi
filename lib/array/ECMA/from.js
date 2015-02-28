
define(
[
	'../../core/type',
	'../../var/hasOP'
], function (
	type,
	hasOP
) 
{'use strict';

return Array.from = Array.from || function (a, f, t) {
	a = Object(a);
	f = f || 0;
	t = t || null;
	var l = a.length >>> 0,
		r = type(this) == 'function' ? Object(new this(l)) : Array(l),
		k = 0,
		v;
	for(; k < l; k++) if (hasOP.call(a, k)) {
		v = a[k];
		r[k] = f ? f.call(t, v, k, a) : v;
	}
	r.length = l;
	return r;
};

});

/**
* ECMAScript 6 Draft <br>
* 返回一个基于类数组对象（array-like object）或可迭代对象（iterable object）转化创建而来的数组。
* @see {@link external:Array.of}
* @see {@link Sumi.Array.fromObj}
* @see {@link Sumi.Array.flatten}
* @see {@link Sumi.Array.concatAll}
* @see {@link Sumi.Array.clone}
* @access public
* @func external:Array.from
* @param {array | object} from - 源对象或数组
* @param {external:Array~fromCallback} func - 对源对象或数组的每个元素进行计算处理的函数
* @param {object} [that] - 供回调函数使用的上下文变量 this
* @returns {array}
* @example
* function h() { return Array.from(arguments); }
* console.log(h(1, 2, 3));                       // [1, 2, 3]
* 
* console.log(Array.from("foo"));                // ['f', 'o', 'o']
* console.log(Array.from({ 1: 0, length: 3 }));  // [ , 0,  ]
* 
* function f(x) { return x + x; }
* console.log(Array.from([1, 2, 3], f));         // [ 2, 4, 6 ]
*/

/**
* @callback external:Array~fromCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array | object} arr - 当前在被遍历的数组、类数组对象或可迭代对象
* @returns {*} 被返回并添加到数组的元素
*/

