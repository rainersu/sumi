
define(
[
	'../../var/hasOP'
]
, function (
	hasOP
) 
{'use strict';

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

return Object.keys = Object.keys || function (o) {
	var r = [],
		n =  0,
		i;
	for(i in o) {
		if (hasOP.call(o, i)) r.push(i);
	}
	if (b) for(; n < l; n++) {
		if (hasOP.call(o, i = a[n])) r.push(i);
	}
	return r;
};

});

/**
* ECMAScript 5.1 Standard <br> 
* 获取一个指定对象所有可枚举自有属性的名称列表并以数组返回。
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames}
* @access public
* @func external:Object.keys
* @param {object} obj - 要获取自有可枚举属性名称数组的指定对象
* @returns {string[]}
* @example
* var x = { x: 1, y: 2 };    
* console.log(Object.keys(x));   // [ 'x', 'y' ]
* 
* var x = new Array(1, 2);
* console.log(Object.keys(x));   // [ '0', '1' ]
*/	
