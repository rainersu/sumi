
define(
[
	'../../core/type'
]
, function (
	type
) 
{'use strict';

return function(v) {
	return type(v) === 'array';
};

});

/** 
* ECMAScript 5.1 Standard <br>
* 判断指定变量是否是数组类型。
* @access public
* @func external:Array.isArray
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Array.isArray(Array));               // false
* console.log(Array.isArray(Array.prototype));     // true
* console.log(Array.isArray([]));                  // true
* console.log(Array.isArray(Array(3)));            // true
* console.log(Array.isArray(new Array(3)));        // true
*/
