
define([
	'../misc/classof'
], function (C) {
	
return Object.isObject = function(v) {
	return C(v) == 'object';
};

});

/**
* 判断指定变量是否是一个真正的对象。
* @access public
* @func external:Object.isObject
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(isObject(null));          // false
* console.log(isObject([null]));        // false
* console.log(isObject({null: null}));  // true
*/
