
define(
[
	'../var/concat',
	'../var/slice',
	'../object/isArraylike'
]
, function (
	concat,
	slice,
	isArraylike
) 
{'use strict';

return function () {
	var a = arguments,
		i = 0,
		b,
		n;
	do {
		b = false;
		a = concat.apply([], a);
		l = a.length;
		while (i < l) {
			if (i in a && isArraylike(n = a[i])) {
				a[i] = slice.call(n);
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
* 使用 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat|concat} 方法，基于所有参数创建出一个完全扁平化的单维数组。
* @see {@link Sumi.Array.flatten}
* @see {@link Sumi.Array.fromObj}
* @see {@link external:Array.from}
* @see {@link external:Array.of}
* @access public
* @func Sumi.Array.concatAll
* @param {...*} [item] - 要添加到数组的元素列表。如果包含数组或类数组对象元素，则其会被递归至完全扁平化
* @returns {array}
* @example
* console.log(Sumi.Array.concatAll());                            // []
* console.log(Sumi.Array.concatAll(1, 2, 3, 4, 5, 6));            // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Sumi.Array.concatAll([1, [2, 3, [4, 5]], 6]));      // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Sumi.Array.concatAll([1, [2, 3, [4]], [[5], 6]]));  // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Sumi.Array.concatAll(new String('abcdef')));        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
* console.log(Sumi.Array.concatAll('ab', new String('cd')));      // [ 'ab', 'c', 'd' ]
* console.log(Sumi.Array.concatAll('ab', Object('cd')));          // [ 'ab', 'c', 'd' ]
* console.log(Sumi.Array.concatAll('ab', [Object('cd'), 'ef']));  // [ 'ab', 'c', 'd', 'ef' ]
*/
