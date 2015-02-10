
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

return function (v, b) {
	var r = isObject(v),
		i;
	if (r) for(i in v) if (!b || H(v, i)) {
		return false;
	}
	return r;
};

});

/**
* 判断指定变量是否是一个空对象。
* @see {@link Sumi.Object.isObject}
* @see {@link Sumi.Object.isPlain}
* @see {@link Sumi.Object.isArraylike}
* @see {@link Sumi.type}
* @access public
* @func Sumi.Object.isEmpty
* @param {*} val - 待检测值
* @param {boolean} [justOwns=false]
* @param {boolean} justOwns.true  - 只检测自有属性
* @param {boolean} justOwns.false - 检测所有可枚举属性
* @returns {boolean}
* @example
* console.log(Sumi.Object.isEmpty({}));                  // true
* console.log(Sumi.Object.isEmpty(new Object()));        // true
* console.log(Sumi.Object.isEmpty(Math));                // true
* console.log(Sumi.Object.isEmpty(Object.prototype));    // true
* console.log(Sumi.Object.isEmpty({ x: 1 }));            // false
* 
* var X = function () { this.x = 1; }
* console.log(Sumi.Object.isEmpty(new X()));             // false
* 
* var X = function () {}
* X.prototype.x = 1;
* console.log(Sumi.Object.isEmpty(new X()));             // false
*/
