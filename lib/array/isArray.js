
define([
	'../misc/classof'
], function (C) {
	
return Array.isArray = function(v) {
	return C(v) == 'array';
};

});

/**
* ECMAScript 5.1 Standard <br>
* 判断指定变量是否是数组。
* @access public
* @func external:Array.isArray
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Array.isArray([]));                      // true
* console.log(Array.isArray(new Array(3)));            // true
*/
