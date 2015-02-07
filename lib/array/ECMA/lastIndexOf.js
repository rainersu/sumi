 
define(
[
	'../../core/eq'
]
, function (
	eq
) 
{'use strict';

return   function (s, f) {
	var o = Object(this),
		l = o.length >>> 0,
		n = arguments.length < 2 ? l :  f >> 0,
		k = Math.min(n < 0 ? l + n : n, l - 1),
		i;
    while  (k > -1) { 
		if (k in o && eq(s, o[k])) return k;
		k--;
	}
    return -1;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 在数组内搜索指定元素，返回元素在数组中最后一次出现的索引值。本方法使用严格等于 （ === ) 比较。
* @see {@link external:Array#contains}
* @see {@link external:Array#find}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#includes}
* @see {@link external:Array#indexOf}
* @access public
* @func external:Array.prototype.lastIndexOf
* @param {*} searchElement - 要搜索的元素
* @param {number} [fromIndex = this.length] - 开始搜索的索引
* @returns {number} 索引值。没找到则返回 -1
* @example
* var a = [2, 5, 9, 2];
* console.log(a.lastIndexOf(2));         //  3
* console.log(a.lastIndexOf(7));         // -1
* console.log(a.lastIndexOf(2, 3));      //  3
* console.log(a.lastIndexOf(2, 2));      //  0
* console.log(a.lastIndexOf(2, -2));     //  0
* console.log(a.lastIndexOf(2, -1));     //  3
*/
