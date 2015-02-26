
define(
[
	'../core/type',
	'../core/prop',
	'../core/compare',
	'../var/slice',
	'./algorithm'
]
, function (
	type,
	prop,
	compare,
	slice,
	algorithm
) 
{'use strict';

return function (o, k, c, s) {
	o = slice.call(Object(o));
	var z = o.length;
	if (z < 2) return o;
	s = type(s) === 'function' ? s : algorithm[s];
	c = c || compare;
	var l = k && k.length,
		f = l ? function (a, b) {
			var m,
				i = 0,
				r;
			while (i < l && !r) {
				m = k[i++];
				r = type(m) === 'function' ? c(m(a, i), m(b, i)) : c(prop(a, m), prop(b, m));
			}
			return r;
		} :  c;
	return s ? s(o, z, f) : o.sort(f);
};

});

/**
* 对数组排序。
* @see {@link Sumi.Sort}
* @see {@link Sumi.Array.reorder}
* @see {@link Sumi.Array.shuffle}
* @see {@link http://en.wikipedia.org/wiki/Sorting_algorithm}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
* @access public
* @func Sumi.sort
* @param {array} arr - 要排序的数组
* @param {array} [val] - 如何获取用于比较的值。包含多个元素则应用复合排序，优先级按先后次序
* @param {string} [val.prop] - 要比较的属性的命名空间。符合 a.b.c 格式的属性链路径，参见 {@link Sumi.prop}
* @param {Sumi.Sort~usepropCallback} [val.func] - 用于获取被用于比较的值的回调函数
* @param {Sumi.Sort~compareCallback} [compare] - 用于替换内置默认比较函数的自定义比较函数 
* @param {string|Sumi.Sort~algorithmCallback} [algorithm] - {@link Sumi.Sort 预定义排序算法的名称} 或 {@link  Sumi.Sort~algorithmCallback 自定义排序算法的函数实现} 。默认使用 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 语言内置方法}
* @returns {array}
* @example
* var arr = new Array(3, 1);
* console.log(Sumi.sort(arr));   // [ 1, 3 ]
* arr[3] = 0;
* console.log(Sumi.sort(arr));   // [ undefined, 0, 1, 3 ]
* @example
* var arr = [ 8, 3, -1, 'a', 0, '5.5', NaN, null ];
* 
* console.log(Sumi.sort(arr));
* // [ NaN, null, -1, 0, 3, 8, '5.5', 'a' ]
* 
* console.log(Sumi.sort(arr, [ function(o) { return +o; } ]));
* // [ 'a', NaN, -1, 0, null, 3, '5.5', 8 ]
* @example
* var arr = [ 
*     { a: 3, b: 'b' }, 
*     { a: 2, b: 'c' }, 
*     { a: 1, b: 'a' }, 
*     { a: 2, b: 'b' } 
* ];
* 
* console.log(Sumi.sort(arr, ['a']));
* // [
* //     { a: 1, b: 'a' },
* //     { a: 2, b: 'c' },
* //     { a: 2, b: 'b' },
* //     { a: 3, b: 'b' } 
* // ]
* 
* console.log(Sumi.sort(arr, ['a', 'b']));
* // [ 
* //     { a: 1, b: 'a' },
* //     { a: 2, b: 'b' },
* //     { a: 2, b: 'c' },
* //     { a: 3, b: 'b' } 
* // ]

* console.log(Sumi.sort(arr, [ function(o) { return 0 - o.a; }, 'b' ]));
* // [ 
* //     { a: 3, b: 'b' },
* //     { a: 2, b: 'b' },
* //     { a: 2, b: 'c' },
* //     { a: 1, b: 'a' } 
* // ]
*/
