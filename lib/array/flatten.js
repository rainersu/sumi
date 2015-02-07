
define(
[
	'../var/slice',
	'../object/isArraylike'
]
, function (
	slice,
	isArraylike
) 
{'use strict';

function f (a, r) {
	if (isArraylike(a)) {
		a = slice.call(a);
		for(var i = 0, l = a.length; i < l; i++) {
			if (i in a) f(a[i], r);
		}
	}
	else r.push(a);
}

return function () {
	var r = [];
	f(arguments, r);
	return r;
};

});

/**
* 使用递归方法，基于所有参数创建出一个完全扁平化的单维数组。
* @see {@link Sumi.Array.concatAll}
* @see {@link Sumi.Array.fromObj}
* @see {@link external:Array.from}
* @see {@link external:Array.of}
* @access public
* @func Sumi.Array.flatten
* @param {...*} [item] - 要添加到数组的元素列表。如果包含数组或类数组对象元素，则其会被递归至完全扁平化
* @returns {array}
* @example
* console.log(Sumi.Array.flatten());                            // []
* console.log(Sumi.Array.flatten(1, 2, 3, 4, 5, 6));            // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Sumi.Array.flatten([1, [2, 3, [4, 5]], 6]));      // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Sumi.Array.flatten([1, [2, 3, [4]], [[5], 6]]));  // [ 1, 2, 3, 4, 5, 6 ]
* console.log(Sumi.Array.flatten(new String('abcdef')));        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
* console.log(Sumi.Array.flatten('ab', new String('cd')));      // [ 'ab', 'c', 'd' ]
* console.log(Sumi.Array.flatten('ab', Object('cd')));          // [ 'ab', 'c', 'd' ]
* console.log(Sumi.Array.flatten('ab', [Object('cd'), 'ef']));  // [ 'ab', 'c', 'd', 'ef' ]
*/
