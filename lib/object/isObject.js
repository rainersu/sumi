
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'object';
};

});

/** 
* 判断指定变量是否是对象类型。
* @see {@link Sumi.Object.isEmpty}
* @see {@link Sumi.Object.isPlain}
* @see {@link Sumi.Object.isArraylike}
* @see {@link Sumi.Core.type}
* @access public
* @func Sumi.Object.isObject
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Object.isObject({}));                  // true
* console.log(Sumi.Object.isObject(null));                // false
* console.log(Sumi.Object.isObject(Object));              // false
* console.log(Sumi.Object.isObject(Object.prototype));    // true
* console.log(Sumi.Object.isObject(Object(3)));           // false
* console.log(Sumi.Object.isObject(new Object()));        // true
* console.log(Sumi.Object.isObject(new Object('.3')));    // false
*/
