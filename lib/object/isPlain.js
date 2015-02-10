
define(
[
	'./isObject',
	'../var/hasOP'
]
, function (
	isObject,
	hasOP
) 
{'use strict';

return function (v) {
	var s = 'constructor',
		c;
	if (!v || !isObject(v) || v.nodeType || v === v.window) {
		return false;
	}
	try {
		c = v[s];
		if (c && !hasOP.call(v, s) && !hasOP.call(c.prototype, "isPrototypeOf")) {
			return false;
		}
	} 
	catch (e) {
		return false;
	}
	for (s in v) {
		if (!hasOP.call(v, s)) return false;
	}
	return true;
};

});


/** 
* 判断指定变量是否是一个简单对象（使用字面量或 Object 构造函数实现）。
* @see {@link Sumi.Object.isObject}
* @see {@link Sumi.Object.isEmpty}
* @see {@link Sumi.Object.isArraylike}
* @see {@link Sumi.type}
* @access public
* @func Sumi.Object.isPlain
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Object.isPlain({}));               // true
* console.log(Sumi.Object.isPlain(new Object()));     // true
* console.log(Sumi.Object.isPlain(new String('1')));  // false
* console.log(Sumi.Object.isPlain(Math));             // true
* 
* var X = function () {};
* console.log(Sumi.Object.isPlain(new X()));          // false
*/
