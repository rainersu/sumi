
define([
	'../misc/classof',
	'../var/hasOwnProperty'
], function (C, H) {

return Object.isEmpty = function (o) {
	var r = C(o) === 'object',
		i;
	if (r) for(i in o) if (H(o, i)) {
		return false;
	}
	return r;
};

});

/**
* 判断指定变量是否是一个没有任何可枚举自有属性的空对象。
* @access public
* @func external:Object.isEmpty
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Object.isEmpty(0));                 // false
* console.log(Object.isEmpty({}));                // true
* console.log(Object.isEmpty(null));              // false
* console.log(Object.isEmpty(undefined));         // false
* console.log(Object.isEmpty(new String()));      // false
* console.log(Object.isEmpty(function(){}));      // false
*/
