
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'function';
};

});

/** 
* 判断指定变量是否是函数类型。
* @access public
* @func Sumi.Function.isFunction
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Function.isFunction(Object));              // true
* console.log(Sumi.Function.isFunction(Object.prototype));    // false
* console.log(Sumi.Function.isFunction(Function));            // true
* console.log(Sumi.Function.isFunction(Function.prototype));  // true
* console.log(Sumi.Function.isFunction(new Function));        // true
* console.log(Sumi.Function.isFunction(function(){}));        // true
*/
