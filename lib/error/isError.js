
define([
	'../misc/classof'
], function (C) {
	
return Error.isError = function(v) {
	return C(v) == 'error';
};

});

/**
* 判断指定变量是否是一个错误对象。
* @access public
* @func external:Error.isError
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Error.isError(new Error('Woh'))); // true
* try {
*     var x = new Math();
* }
* catch(e) {
*     console.log(Error.isError(e));            // true
* }
*/
