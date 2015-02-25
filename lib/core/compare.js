
define(
[
	'./type'
]
, function (
	type
) 
{'use strict';

return function (a, b) {
	var c, d;
	return a === b || (a !== a && b !== b) ? 0 :
	       a != null && b == null ?  1 :
	       a == null && b != null ? -1 : 
	      (c = type(a), d = type(b), c === d) ? (a > b ? 1 : -1) : 
	      (c > d ? 1 : -1);
};

});

/**
* 比较两个参数大小。
* @see {@link Sumi.eq}
* @see {@link Sumi.Sort}
* @see {@link Sumi.Array.reorder}
* @access public
* @func Sumi.compare
* @param {*} a - 要比较的第一个值
* @param {*} b - 要比较的第二个值
* @returns {number} a === b 则返回 0 ，a > b 则返回 1 ，否则返回 -1
* @example
* console.log(Sumi.compare(3, 1));               //  1
* console.log(Sumi.compare(NaN, 1));             // -1
* console.log(Sumi.compare(NaN, NaN));           //  0
*/
