
define([
	'../misc/classof'
], function (C) {
	
return String.isString = function(v) {
	return C(v) == 'string';
};

});

/**
* 判断指定变量是否是字符串。
* @access public
* @func external:String.isString
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(String.isString(''));               // true
* console.log(String.isString(new String('')));   // true
*/
