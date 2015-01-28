
define([
	'../var/concat',
	'./unique'
], function (A, Q) {

return Array.union = function () {
	return  Q.call(A([], arguments));

};

});

/**
* 计算若干个数组的并集。
* @see {@link external:Array.intersect}
* @see {@link external:Array.difference}
* @access public
* @func external:Array.union
* @param {...array} [arr] - 要加入并集运算的数组
* @returns {array}
* @example
* console.log(Array.union([1, 2, 3], [2, 3, 4], [4, 5, 6]));
* // [ 1, 2, 3, 4, 5, 6 ]
* 
* console.log(Array.union( 1, 2, 3,   2, 3, 4,   4, 5, 6 ));
* // [ 1, 2, 3, 4, 5, 6 ]
* 
* console.log(Array.union('1, 2, 3', '2, 3, 4', '4, 5, 6'));
* // [ '1, 2, 3', '2, 3, 4', '4, 5, 6' ]
*/
