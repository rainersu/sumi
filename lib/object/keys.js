
define([
	'../var/hasownproperty',
	'../var/object'
], function (H, O) {

var a = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	],
	b = !({ toString: null }).propertyIsEnumerable(a[0]),
	l = a.length;

return Object.keys = Object.keys || function(obj) {
	var o = O(obj),
		r = [],
		n =  0,
		i;
	for(i in o) {
		if (H(o, i)) r.push(i);
	}
	if (b) for(; n < l; n++) {
		if (H(o, i = a[n])) r.push(i);
	}
	return r;
};

});

/**
* ECMAScript 5.1 Standard <br> 
* 获取一个指定对象所有可枚举自有属性的名称列表并以数组返回。
* @access public
* @func external:Object.keys
* @param {object} obj - 要获取自有可枚举属性名称数组的指定对象
* @returns {string[]} 属性名称列表
* @example
* console.log(Object.keys({}));
* console.log(Object.keys(Object));
* console.log(Object.keys(Object.prototype));
*/	
