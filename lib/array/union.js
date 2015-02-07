
define(
[
	'../var/concat',
	'./uniq'
]
, function (
	concat, 
	uniq
) 
{'use strict';

return function () {
	return  uniq(concat.apply([], arguments));

};

});

/**
* 计算若干个数组的并集。
* @see {@link Sumi.Array.intersect}
* @see {@link Sumi.Array.difference}
* @access public
* @func Sumi.Array.union
* @param {...array} [arr] - 要加入并集运算的数组
* @returns {array}
* @example
* console.log(Sumi.Array.union([1, 2, 3], [2, 3, 4], [4, 5, 6]));
* // [ 1, 2, 3, 4, 5, 6 ]
* 
* console.log(Sumi.Array.union( 1, 2, 3,   2, 3, 4,   4, 5, 6 ));
* // [ 1, 2, 3, 4, 5, 6 ]
* 
* console.log(Sumi.Array.union('1, 2, 3', '2, 3, 4', '4, 5, 6'));
* // [ '1, 2, 3', '2, 3, 4', '4, 5, 6' ]
*/
