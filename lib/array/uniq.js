
define(
[
	'../core/eq',
	'./reorder'
]
,function (
	eq,
	reorder
) 
{'use strict';

return function (a) {
	a = reorder(a);
	var r = [],
		l = a.length,
		i = 1;
	if (l) {
		r.push(a[0]);
		for(; i < l; i++) {
			if (i in a && !eq(a[i - 1], a[i])) {
				r.push(a[i]);
			}
		}
	}
	return r;
};

});

/**
* 使用 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort|sort} 方法，去除重复元素，返回结果为新数组。此方法不能保证返回数组的元素顺序。
* @see {@link Sumi.Array.dedup}
* @see {@link Sumi.Array.unique}
* @see {@link Sumi.Array.clean}
* @see {@link Sumi.sort}
* @see {@link Sumi.eq}
* @see {@link external:Array#filter}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
* @access public
* @func Sumi.Array.uniq
* @param {object} arr - 数组、字符串或类数组对象
* @returns {array} 
* @example
* console.log(Sumi.Array.uniq([null, undefined, 0, null, undefined]));
* // [ undefined, null, 0 ]
* 
* console.log(Sumi.Array.uniq(['ab', 'bc', 'ab', 'cd', 'bc', 'ab']));
* // [ 'ab', 'bc', 'cd' ]
* 
* console.log(Sumi.Array.uniq(['1', '1', '2', 1, '3', '3', 2, '2', '1', 3, NaN, NaN]));
* // [ 1, '3', '1', '2', 3, NaN, 2 ]
* 
* console.log(Sumi.Array.uniq([2, '1', 1, true, 1.0]));
* // [ 2, '1', 1, true ]
*/

/**
* @callback Sumi.Array~sortCallback
* @param {*} a - 当前参与比较的第一个元素
* @param {*} b - 当前参与比较的第二个元素
* @returns {number} 如果 < 0 ，则 a 排前。如果 > 0 ，则 b 排前。如果 a 和 b 分不出次序，则为 0
*/
