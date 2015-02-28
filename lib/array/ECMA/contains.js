
define(
[
	'./includes'
]
, function (
	includes
) 
{'use strict';

return Array.prototype.contains = Array.prototype.contains || includes;

});

/**
* ECMAScript 7 Proposal <br>
* 测试数组内是否包含指定的元素。本方法使用严格等于 （ === ) 比较。
* @see {@link external:Array#includes}
* @see {@link external:Array#find}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#indexOf}
* @see {@link external:Array#lastIndexOf}
* @access public
* @func external:Array.prototype.contains
* @param {*} searchElement - 要搜索的元素
* @param {number} [fromIndex = 0] - 开始搜索的索引
* @returns {boolean} 是否找到了指定元素
* @example
* console.log([1, 2, 3].contains(2));                      // true
* console.log([1, 2, 3].contains(4));                      // false
* console.log([1, 2, 3].contains(3, 3));                   // false
* console.log([1, 2, 3].contains(3, -1));                  // true
* console.log([1, 2, NaN].contains(NaN));                  // true
*/
	