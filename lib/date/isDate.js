
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'date';
};

});

/** 
* 判断指定变量是否是日期类型。
* @access public
* @func Sumi.Date.isDate
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Date.isDate(Date(2013, 13, 1)));         // false
* console.log(Sumi.Date.isDate(new Date(2013, 13, 1)));     // true
* console.log(Sumi.Date.isDate(Date));                      // false
* console.log(Sumi.Date.isDate(Date.prototype));            // true
*/
