
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'string';
};

});

/**
* 判断指定变量是否是字符串类型。
* @access public
* @func Sumi.String.isString
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.String.isString(String));                // false
* console.log(Sumi.String.isString(new String('')));        // true
* console.log(Sumi.String.isString(String(3)));             // true
* console.log(Sumi.String.isString(String.prototype));      // true
*/
