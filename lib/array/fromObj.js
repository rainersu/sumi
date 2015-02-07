
define(
[
	'../var/slice'
]
, function (
	slice
) 
{'use strict';

return function () {
	return slice.call.apply(slice, arguments);
};

});

/**
* 返回一个基于类数组对象（array-like object）转化创建而来的数组。
* @see {@link external:Array.from}
* @see {@link external:Array.of}
* @see {@link Sumi.Array.flatten}
* @see {@link Sumi.Object.isArraylike}
* @see {@link Sumi.Array.clone}
* @access public
* @func Sumi.Array.fromObj
* @param {object} obj - 数组、字符串或类数组对象
* @returns {array}
* @example
* (function() { console.log(Sumi.Array.fromObj(arguments)); })(1, 2, 3);  // [ 1, 2, 3 ]
* console.log(Sumi.Array.fromObj({ 1: 0, length: 3 }));                   // [ , 0,  ]
* console.log(Sumi.Array.fromObj('abc'));                                 // [ 'a', 'b', 'c' ]
*/
