
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'boolean';
};

});

/**
* 判断指定变量是否是布尔类型。
* @access public
* @func Sumi.Boolean.isBoolean
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Boolean.isBoolean(Boolean));                  // false
* console.log(Sumi.Boolean.isBoolean(Boolean.prototype));        // true
* console.log(Sumi.Boolean.isBoolean(Boolean(3)));               // true
* console.log(Sumi.Boolean.isBoolean(new Boolean()));            // true
*/
