
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function (v, b) {
	if (typeof v === 'string') {
		return !!b;
	}
	var t = type(v),
		l;
	if (!v || t === 'function' || v === v.window) {
		return false;
	}
	l = v.length;
	if (v.nodeType === 1 && l) {
		return true;
	}
	return t === 'array' || l === 0 || typeof l === 'number' && l > 0 && (l - 1) in v;
}

});

/** 
* 判断指定变量是否是数组或类数组对象。
* @see {@link Sumi.Object.isObject}
* @see {@link Sumi.Object.isEmpty}
* @see {@link Sumi.Object.isPlain}
* @see {@link Sumi.Core.type}
* @access public
* @func Sumi.Object.isArraylike
* @param {*} val - 待检测值
* @param {boolean} [allowStr=false]
* @param {boolean} allowStr.true  - 允许将字面量字符串也判断为类数组对象
* @param {boolean} allowStr.false - 禁止字面量字符串通过检测
* @returns {boolean}
* @example
* console.log(Sumi.Object.isArraylike({}));                      // false
* console.log(Sumi.Object.isArraylike([]));                      // true
* console.log(Sumi.Object.isArraylike(''));                      // false
* console.log(Sumi.Object.isArraylike('abc'));                   // false
* console.log(Sumi.Object.isArraylike('abc', true));             // true
* console.log(Sumi.Object.isArraylike(Object('')));              // true
* console.log(Sumi.Object.isArraylike(Object('abc')));           // true
* console.log(Sumi.Object.isArraylike(new String('')));          // true
* console.log(Sumi.Object.isArraylike(new String('abc')));       // true
* console.log(Sumi.Object.isArraylike({0: null, length: 1}));    // true
* 
* (function x() {
*     console.log(Sumi.Object.isArraylike(arguments));           // true
* })();
*/
