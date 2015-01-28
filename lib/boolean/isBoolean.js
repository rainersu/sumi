
define([
	'../misc/classof'
], function (C) {
	
return Boolean.isBoolean = function(v) {
	return C(v) == 'boolean';
};

});

/**
* 判断指定变量是否是布尔值。
* @access public
* @func external:Boolean.isBoolean
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Boolean.isBoolean(true));                      // true
* console.log(Boolean.isBoolean(new Boolean(true)));         // true
*/
