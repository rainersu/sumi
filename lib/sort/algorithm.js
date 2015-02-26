
define(
[
	'./algorithm/bubble',
	'./algorithm/cocktail',
	'./algorithm/brick',
	'./algorithm/comb',
	'./algorithm/gnome',
	'./algorithm/quick',
	'./algorithm/stooge',
	'./algorithm/bingo',
	'./algorithm/selection',
	'./algorithm/heap',
	'./algorithm/insertion',
	'./algorithm/shell'
]
, function (
	bubble,
	cocktail,
	brick,
	comb,
	gnome,
	quick,
	stooge,
	bingo,
	selection,
	heap,
	insertion,
	shell
) 
{'use strict';

return {
	bubble        : bubble,
	cocktail      : cocktail,
	brick         : brick,
	comb          : comb,
	gnome         : gnome,
	quick         : quick,
	stooge        : stooge,
	bingo         : bingo,
	selection     : selection,
	heap          : heap,
	insertion     : insertion,
	shell         : shell
};

});

/**
* 供 {@link Sumi.sort} 方法使用的预定义排序算法的集合。
* @namespace Sumi.Sort
* @see {@link Sumi.sort}
* @see {@link Sumi.Array.reorder}
* @see {@link Sumi.Array.shuffle}
* @see {@link http://en.wikipedia.org/wiki/Sorting_algorithm}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
*/

/**
* @callback Sumi.Sort~algorithmCallback
* @param {array} arr - 要排序的数组
* @param {number} len - 数组的长度
* @param {Sumi.Sort~compareCallback} [compare] - 用于替换内置默认比较函数的自定义比较函数 	
* @returns {array} 排序后的数组副本
*/
	
/**
* @callback Sumi.Sort~usepropCallback
* @param {*} item - 当前定位到的元素
* @param {number} index - 当前定位到的元素的索引	
* @returns {*} 供排序算法最终用于比较的值
*/
	
/**
* @callback Sumi.Sort~compareCallback
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
* @param {*} a - 要比较的第一个元素
* @param {*} b - 要比较的第二个元素
* @returns {number} a === b 则返回 0 ，a > b 则返回 1 ，否则返回 -1
*/
	