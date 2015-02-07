
define(function () {'use strict';

return function (f, t) {
	var o = Object(this),
		l = o.length,
		i = 0;
	for(t = t || o; i < l; i++) {
		if (i in o) f.call(t, o[i], i, o);
	}
};

});

/**
* ECMAScript 5.1 Standard <br>
* 遍历数组依次对每个元素执行回调函数。
* @see {@link Sumi.Array.each}
* @see {@link Sumi.Object.each}
* @access public
* @func external:Array.prototype.forEach
* @param {external:Array~forEachCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {undefined}
* @example
* var a = [1, 2, 3];
* var f = function (n, i) { a[i] = ++n; };
* a.forEach(f);
* console.log(a);      // [ 2, 3, 4 ]
* 
* var a = '123';
* var f = function (n) { a += n; };
* Array.prototype.forEach.call(a, f);
* console.log(a);      // 123123                          
*/

/**
* @see {@link external:Array#forEach}
* @callback external:Array~forEachCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array | object} arr - 当前在被遍历的数组
* @returns {undefined}
*/
