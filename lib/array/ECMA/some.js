
define(function () {'use strict';

return function (f, t) {
	var o = Object(this),
		l = o.length;
	for(t = t || o; l--;) {
		if(l in o && f.call(t, o[l], l, o)) return true;
	}
	return false;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 测试是否数组内至少有一个元素符合条件。
* @see {@link external:Array#every}
* @access public
* @func external:Array.prototype.some
* @param {external:Array~someCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {boolean} 是否至少有一个元素通过测试
* @example
* function f(e) { return +e > 5; }
* console.log([3, 5].some(f));                       // false
* console.log([12, 5, 8].some(f));                   // true
* console.log([12, 18, 130, 33].some(f));            // true
* console.log(Array.prototype.some.call('123', f));  // false
* console.log(Array.prototype.some.call('456', f));  // true
* console.log(Array.prototype.some.call('789', f));  // true
*/

/**
* @callback external:Array~someCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array} arr - 当前在被遍历的数组
* @returns {boolean} 
*/
