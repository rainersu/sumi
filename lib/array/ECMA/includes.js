
define(
[
	'../../core/eq'
]
, function (
	eq
) 
{'use strict';

return Array.prototype.includes = Array.prototype.includes || function (s, f) {
    var o = Object(this),
		l = o.length,
		n = f >> 0,
		k = n <  0 ? Math.max(l + n, 0) : n;
    while  (k <  l) { 
		if (k in o && eq(s, o[k])) return true;
		k++;
	}
    return false;
};

});

/**
* ECMAScript 7 Proposal <br>
* 测试数组内是否包含指定的元素。本方法使用严格等于 （ === ) 比较。
* @see {@link external:Array#contains}
* @see {@link external:Array#find}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#indexOf}
* @see {@link external:Array#lastIndexOf}
* @access public
* @func external:Array.prototype.includes
* @param {*} searchElement - 要搜索的元素
* @param {number} [fromIndex = 0] - 开始搜索的索引
* @returns {boolean} 是否找到了指定元素
* @example
* console.log([1, 2, 3].includes(2));                      // true
* console.log([1, 2, 3].includes(4));                      // false
* console.log([1, 2, 3].includes(3, 3));                   // false
* console.log([1, 2, 3].includes(3, -1));                  // true
* console.log([1, 2, NaN].includes(NaN));                  // true
*/
