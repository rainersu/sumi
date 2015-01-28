
define([
	'../misc/classof'
], function (C) {
	
return Date.isDate = function(v) {
	return C(v) == 'date';
};

});

/**
* 判断指定变量是否是日期对象。
* @access public
* @func external:Date.isDate
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Date.isDate(Date(2013, 13, 1)));         // false
* console.log(Date.isDate(new Date(2013, 13, 1)));     // true
*/
