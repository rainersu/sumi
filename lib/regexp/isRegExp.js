
define([
	'../misc/classof'
], function (C) {
	
return RegExp.isRegExp = function(v) {
	return C(v) == 'regexp';
};

});

/**
* 判断指定变量是否是一个正则表达式对象。
* @access public
* @func external:RegExp.isRegExp
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(isRegExp(/[\d\w]+/i));                        // true
* console.log(isRegExp(new RegExp('\\d\\w+', 'i')));        // true
*/
