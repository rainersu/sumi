
define([
	'../misc/classof',
	'../var/hasOwnProperty',
	'../var/object'
], function (C, H, O) {

return Array.from = Array.from || function (from, func, that) {
	var f = func || 0,
		t = that || null,
		a = O(from),
		l = a.length >>> 0,
		r = C(this) == 'function' ? O(new this(l)) : new Array(l),
		k = 0,
		v;
	for(; k < l; k++) {
		if(H(a, k)) {
			v = a[k];
			r[k] = f ? f.call(t, v, k, a) : v;
		}
	}
	r.length = l;
	return r;
};

});

/**
* ECMAScript 6 Draft <br>
* 返回一个基于类数组对象（array-like object）或可迭代对象（iterable object）转化创建而来的数组。
* @see {@link zip}
* @see {@link unzip}
* @see {@link external:Array.fromObj}
* @see {@link external:Array.flatten}
* @see {@link external:Array.of}
* @access public
* @func external:Array.from
* @param {array | object} from - 源对象或数组
* @param {Array~calcCallback} func - 对源对象或数组的每个元素进行计算处理的函数
* @param {object} [that] - 供回调函数使用的上下文变量 this
* @returns {array}
* @example
* console.log(Array.from({1:0,length:3}));             // [ , 0,  ]
* console.log(Array.from([1, 2, 3], function(x) {
*     return x + x;
* }));                                                 //[ 2, 4, 6 ]
* console.log(Array.from("foo"));                      // [ 'f', 'o', 'o' ]
*/

/**
* @callback Array~calcCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array | object} arr - 当前在被遍历的数组、类数组对象或可迭代对象
* @returns {*} 被返回并添加到新数组的元素
*/

