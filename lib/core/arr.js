
define(
[
	'../Array/ECMA/isArray',
	'../var/slice'
]
, function (
	isArray,
	slice
) 
{'use strict';

return function (a) {
	return arguments.length > 1 ? slice.apply(arguments) : !a ? [] : isArray(a) ? a : slice.call(Object(a));
};

});

/** 
* 检测参数值是否是数组，并尽量确保最终返回一个数组。
* @access public
* @func Sumi.Core.arr
* @param {*} val - 如果是一个数组，则直接返回。否则将视为类数组对象尝试转换为一个新数组 
* @returns {array}
* @example
* console.log(Sumi.Core.arr());           // []
* console.log(Sumi.Core.arr('a'));        // [ 'a' ]
* console.log(Sumi.Core.arr('abc'));      // [ 'a', 'b', 'c' ]
* console.log(Sumi.Core.arr('a', 'b'));   // [ 'a', 'b' ]
* console.log(Sumi.Core.arr([ 1 ]));      // [ 1 ]
* console.log(Sumi.Core.arr({ x: 1 }));   // []
* console.log(Sumi.Core.arr(null));       // []
* console.log(Sumi.Core.arr(1));          // []
* console.log(Sumi.Core.arr(1, 2));       // [ 1, 2 ]
*/