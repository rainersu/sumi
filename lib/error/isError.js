
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'error';
};

});

/** 
* 判断指定变量是否是错误类型。
* @access public
* @func Sumi.Error.isError
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Error.isError(new TypeError()));        // true
* console.log(Sumi.Error.isError(new Error('ah')));        // true
* console.log(Sumi.Error.isError(RangeError.prototype));   // true
* console.log(Sumi.Error.isError(Error));                  // false
* 
* try {
*     var x = new Math();
* }
* catch(e) {
*     console.log(Sumi.Error.isError(e));                  // true
* }
*/
