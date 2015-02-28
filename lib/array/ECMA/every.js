
define(function () {'use strict';

return Array.prototype.every = Array.prototype.every || function (f, t) {
	var o = Object(this),
		l = o.length;
	for(t = t || o; l--;) {
		if(l in o && !f.call(t, o[l], l, o)) return false;
	}
	return true;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 测试是否数组内的所有元素都符合条件。
* @see {@link external:Array#some}
* @access public
* @func external:Array.prototype.every
* @param {external:Array~someCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {boolean} 是否所有元素都通过测试
* @example
* function f(e) { return +e > 5; }
* console.log([3, 5].every(f));                       // false
* console.log([12, 5, 8].every(f));                   // false
* console.log([12, 18, 130, 33].every(f));            // true
* console.log(Array.prototype.every.call('123', f));  // false
* console.log(Array.prototype.every.call('456', f));  // false
* console.log(Array.prototype.every.call('789', f));  // true
*/
