
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
	if (b === undefined) b = 1;
	var n,
		r;
	for (n in o) if (!b || hasOP.call(o, n)) {
		r = f.call(t, o[n], n, o);
		if (r !== undefined) return r;
	}
};

});

/** 
* 对一个对象的所有自有可枚举字段依次调用指定的函数。
* @see {@link Sumi.Array.each}
* @see {@link external:Array#forEach}
* @access public
* @func Sumi.Object.each
* @param {object} obj - 对象或其它任意可枚举类型
* @param {Sumi.Object~eachCallback} func - 回调函数。如果有返回值，则强制中止遍历并直接返回该值
* @param {boolean} [justOwns=true]
* @param {boolean} justOwns.true  - 只枚举自有属性
* @param {boolean} justOwns.false - 既枚举自有属性也枚举其它自原型继承来的属性
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {undefined|*} 无返回值，或返回强制中止迭代的 func 的返回值
* @example
* var a = { x: 1, y: 2 };
* var f = function (i, n) { this[n] = i + 1; };
* Sumi.Object.each(a, f);
* console.log(a);      // { x: 2, y: 3 }
* 
* var o = [];
* var f = function (i, n) { this.push(i + 1); };
* Sumi.Object.each('123', f, o);
* console.log(o);      // [ '11', '21', '31' ]
* 
* var a = new String('abc');
* a.hello = function() {};
* var b = {};
* var f = function (i, n) { b[n] = i; }
* Sumi.Object.each(a, f);
* console.log(b);      // { '0': 'a', '1': 'b', '2': 'c', hello: [Function] }
* 
* var X = function() { this.m = 1; };
* var f = function(i, n) { r += n; };
* X.prototype.x = 2;
* var r = '';
* var a = new X();
* a.n = 3;
* Sumi.Object.each(a, f, true);
* console.log(r);      // mn
* var r = '';
* var b = new X();
* b.n = 3;
* Sumi.Object.each(b, f, false);
* console.log(r);      // mnx
*/

/**
* @see {@link Sumi.Object.each}
* @callback Sumi.Object~eachCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素键名
* @param {object} obj - 当前在被遍历的对象或其它可枚举类型
* @returns {undefined|*} 如果有返回值，则迭代将被强行中止并直接返回该返回值
*/