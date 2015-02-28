
define(
[
	'../../core/eq'
]
, function (
	eq
) 
{'use strict';

return Array.prototype.indexOf = Array.prototype.indexOf || function (s, f) {
	var o = Object(this),
		l = o.length >>> 0,
		n = f >> 0,
		k = Math.max(n < 0 ? l + n : n, 0),
		i;
    while (k <  l) { 
		if(k in o && eq(s, o[k])) return k;
		k++;
	}
    return -1;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 在数组内搜索指定元素，返回元素在数组中第一次出现的索引值。本方法使用严格等于 （ === ) 比较。
* @see {@link external:Array#contains}
* @see {@link external:Array#find}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#includes}
* @see {@link external:Array#lastIndexOf}
* @access public
* @func external:Array.prototype.indexOf
* @param {*} searchElement - 要搜索的元素
* @param {number} [fromIndex = 0] - 开始搜索的索引
* @returns {number} 索引值。没找到则返回 -1
* @example
* console.log([1, 2, 3].indexOf(2));                       //  1
* console.log([1, 2, 3].indexOf(4));                       // -1
* console.log([1, 2, 3].indexOf(3, 3));                    // -1
* console.log([1, 2, 3].indexOf(3, -1));                   //  2
* console.log([1, 2, NaN].indexOf(NaN));                   //  2
*/ 
