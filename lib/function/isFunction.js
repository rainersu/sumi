
define([
	'../misc/classof'
], function (C) {
	
return Function.isFunction = function(v) {
	return C(v) == 'function';
};

});

/**
* 判断指定变量是否是一个函数。
* @access public
* @func external:Function.isFunction
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Function.isFunction(Function));           // true
* console.log(Function.isFunction(Function.prototype)); // false
*/
