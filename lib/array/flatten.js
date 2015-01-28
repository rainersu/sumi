
define([
	'../var/concat'
], function (A) {

return Array.flatten = function () {
	var a = arguments,
		i = 0,
		b,
		n;
	do {
		b = false;
		a = A([], a);
		l = a.length;
		while (i < l) {
			n = a[i];
			if (n && n.length && typeof n === 'object') {
				b = true;
				break;
			}
			i++; 
		}
	}
	while (b);
	return a ;
};

});

/**
* 基于所有参数创建出一个完全扁平化的单维数组。
* @see {@link zip}
* @see {@link unzip}
* @see {@link external:Array.from}
* @see {@link external:Array.fromObj}
* @see {@link external:Array.of}
* @access public
* @func external:Array.flatten
* @param {...*} [items] - 要添加到数组的元素列表。如果包含数组或类数组对象元素，则其会被完全扁平化
* @returns {array}
* @example
* console.log(Array.flatten());                            // []
* console.log(Array.flatten( 1,  2, 3,  4, 5,   6));       // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Array.flatten([1, [2, 3, [4, 5]], 6]));      // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Array.flatten([1, [2, 3, [4]], [[5], 6]]));  // [ 1, 2, 3, 4, 5, 6 ]
*/
