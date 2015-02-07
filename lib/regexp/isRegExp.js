
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'regexp';
};

});

/**
* 判断指定变量是否是正则表达式类型。
* @access public
* @func Sumi.RegExp.isRegExp
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.RegExp.isRegExp(/[\d\w]+/i));                        // true
* console.log(Sumi.RegExp.isRegExp(new RegExp('\\d\\w+', 'i')));        // true
* console.log(Sumi.RegExp.isRegExp(RegExp));                            // false
* console.log(Sumi.RegExp.isRegExp(RegExp.prototype));                  // true
*/
