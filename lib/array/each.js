
define([
	'../var/hasOP'
]
, function (
	hasOP
) 
{'use strict';

return function (o, f, b, t) {
	o = Object(o);
	t = t || o;
	var l = o.length,
		m = 0,
		n = l,
		x = 1;
	if (b) {
		m = l - 1,
		n =-1,
		x =-1;
	}
	while  (m -  n) {
		if (m in o) {
			r = f.call(t, o[m], m, o);
			if (r !== undefined) return r;
		}
		m+= x;
	}
};

});

/** 
* 对一个类数组对象的所有可索引元素依次调用指定的函数。
* @see {@link Sumi.Object.each}
* @see {@link external:Array#forEach}
* @access public
* @func Sumi.Array.each
* @param {array|object|string} obj - 数组、字符串或其它类数组对象
* @param {Sumi.Array~eachCallback} func - 回调函数。如果有返回值，则强制中止遍历并直接返回该值
* @param {boolean} [backward=false]
* @param {boolean} backward.true  - 逆向迭代
* @param {boolean} backward.false - 顺序迭代
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {undefined|*} 无返回值，或返回强制中止迭代的 func 的返回值
* @example
* var s = '0123';
* var f = function(i) { s += i; }
* Sumi.Array.each(s, f, true);
* console.log(s);      // 01233210
* 
* var s = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
* var f = function(i, n) { s[n] = n; }
* Sumi.Array.each(s, f);
* console.log(s);      // { '0': 0, '1': 1, '2': 2, length: 3 }
* 
* var s = [-1, 0, 1, 2, 3];
* var f = function(i, n) { if (i > 0) return n; }
* console.log(Sumi.Array.each(s, f));   // 2
*/

/**
* @see {@link Sumi.Array.each}
* @callback Sumi.Array~eachCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {object} obj - 当前在被遍历的数组、字符串或其它类数组对象
* @returns {undefined|*} 如果有返回值，则迭代将被强行中止并直接返回该返回值
*/
